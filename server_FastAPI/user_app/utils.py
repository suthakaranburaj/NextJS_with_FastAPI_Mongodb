import re
import bcrypt
import jwt
import base64
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response

def validate_phone(phone):
    cleaned = phone.replace(' ', '').replace('-', '')
    regex = r'^(?:\+91|91|0)?[6-9]\d{9}$'
    return re.match(regex, cleaned) is not None

def hash_pin(pin):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(pin.encode('utf-8'), salt)
    return hashed.decode('utf-8')  # Store as string

def check_pin(pin, hashed_pin):
    return bcrypt.checkpw(pin.encode('utf-8'), hashed_pin.encode('utf-8'))

def generate_access_token(user):
    return jwt.encode(
        {'user_id': str(user._id), 'role': user.role},
        settings.JWT_SECRET_KEY,
        algorithm='HS256'
    )

def generate_refresh_token(user):
    return jwt.encode(
        {
            'user_id': str(user._id),
            'role': user.role,
            'token_version': user.token_version
        },
        settings.JWT_SECRET_KEY,
        algorithm='HS256'
    )

def api_response(success, data=None, message=None, status_code=status.HTTP_200_OK):
    return Response({
        'status': success,
        'data': data,
        'message': message
    }, status=status_code)

COOKIE_OPTIONS = {
    'httponly': False,
    'secure': True,
    'samesite': 'Strict',
}