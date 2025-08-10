# user_app/apps.py
from django.apps import AppConfig

class UserAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'user_app'

    def ready(self):
        # This will create the MongoDB collection on startup
        from .models import User
        try:
            User.objects.count()  # Force collection creation
        except Exception as e:
            print(f"Error initializing MongoDB collection: {e}")