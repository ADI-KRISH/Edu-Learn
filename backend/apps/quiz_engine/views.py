# apps/quiz_engine/views.py
from django.http import JsonResponse

def health_check(request):
    return JsonResponse({"message": "Quiz engine is working."})

def test_endpoint(request):
    return JsonResponse({"status": "success", "data": "Test endpoint works!"})