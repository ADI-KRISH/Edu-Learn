from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Document
from .services import DocumentParser
import os

class DocumentUploadView(APIView):
    def post(self, request):
        if 'document' not in request.FILES:
            return Response(
                {"error": "No file uploaded"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Save uploaded file
        doc = Document.objects.create(
            user=request.user,
            original_file=request.FILES['document']
        )

        # Process asynchronously (Celery would be better here)
        try:
            parser = DocumentParser()
            doc.processed_text = parser.process_document(doc)
            doc.status = 'processed'
            doc.save()
            return Response({"id": doc.id}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )