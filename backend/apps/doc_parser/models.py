from argparse import FileType
from tokenize import blank_re
from typing import override
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

class Document(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    original_file = models.FileField(upload_to='documents/')
    processed_text = models.TextField(blank = True)
    file_type = models.CharField(max_length=20)
    status = models.CharField( max_length=20,
        choices=[('uploaded','Uploaded'),
                 ('processing','Processing'),
                 ('processed', 'Processed'),
                ('failed', 'Failed')
                 ],
        default='uploaded'
        )
    created_at = models.DateTimeField(auto_now_add=True)
    
    @override
    def __str__(self):
        return f"{self.user.email} - {self.original_file.name}"
    
    