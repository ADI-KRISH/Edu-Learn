# apps/quiz_engine/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.health_check, name='health_check'),
    path('test/', views.test_endpoint, name='test_endpoint'),  # Add more paths as needed
]