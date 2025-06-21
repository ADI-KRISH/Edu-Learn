from django.apps import AppConfig


class DocParserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'doc_parser'

    def ready(self):
        # Initialize Google clients when app starts
        from .services import DocumentParser
        DocumentParser()  # Warm-up