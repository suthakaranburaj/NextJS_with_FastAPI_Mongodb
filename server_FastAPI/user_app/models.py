# user_app/models.py
from djongo import models

class User(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, unique=True)
    pin = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=[
        ('vendor', 'Vendor'),
        ('normal_user', 'Normal User'),
        ('supplier', 'Supplier'),
        ('agent', 'Agent'),
    ])
    refresh_token = models.TextField(blank=True, null=True)
    token_version = models.IntegerField(default=0)
    image = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users'
        managed = False  # Djongo doesn't need Django to manage the table

    def __str__(self):
        return self.phone