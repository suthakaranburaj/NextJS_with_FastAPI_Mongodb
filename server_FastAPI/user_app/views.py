import cloudinary.uploader
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from .models import User
from .serializers import UserSerializer, UserRegisterSerializer, UserLoginSerializer
from .utils import (
    hash_pin, check_pin, generate_access_token, generate_refresh_token,
    api_response, COOKIE_OPTIONS, validate_phone
)
from django.conf import settings

class RegisterUser(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if not serializer.is_valid():
            return api_response(False, None, serializer.errors, 400)
        
        data = serializer.validated_data
        phone = data['phone']
        
        if User.objects.filter(phone=phone).exists():
            return api_response(False, None, "User already exists", 400)
        
        # Handle image upload
        image = None
        if 'image' in request.FILES:
            try:
                upload_result = cloudinary.uploader.upload(request.FILES['image'])
                image = upload_result['secure_url']
            except Exception as e:
                return api_response(False, None, f"Image upload failed: {str(e)}", 400)
        
        # Create user
        try:
            user = User.objects.create(
                name=data['name'],
                phone=phone,
                pin=hash_pin(data['pin']).decode('utf-8'),
                role=data['role'],
                image=image
            )
            
            access_token = generate_access_token(user)
            refresh_token = generate_refresh_token(user)
            
            user.refresh_token = refresh_token
            user.save()
            
            user_data = UserSerializer(user).data
            response = api_response(True, user_data, "User registered successfully", 201)
            response.set_cookie('accessToken', access_token, **COOKIE_OPTIONS)
            response.set_cookie('refreshToken', refresh_token, **COOKIE_OPTIONS)
            return response
            
        except Exception as e:
            return api_response(False, None, f"Registration failed: {str(e)}", 500)

class LoginUser(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if not serializer.is_valid():
            return api_response(False, None, serializer.errors, 400)
        
        data = serializer.validated_data
        phone = data['phone']
        pin = data['pin']
        
        if not validate_phone(phone):
            return api_response(False, None, "Invalid phone number", 400)
        
        try:
            user = User.objects.get(phone=phone)
        except User.DoesNotExist:
            return api_response(False, None, "User does not exist", 400)
        
        if not check_pin(pin, user.pin):
            return api_response(False, None, "Invalid credentials", 400)
        
        access_token = generate_access_token(user)
        refresh_token = generate_refresh_token(user)
        
        user.refresh_token = refresh_token
        user.save()
        
        user_data = UserSerializer(user).data
        response = api_response(True, user_data, "Login successful", 200)
        response.set_cookie('accessToken', access_token, **COOKIE_OPTIONS)
        response.set_cookie('refreshToken', refresh_token, **COOKIE_OPTIONS)
        return response