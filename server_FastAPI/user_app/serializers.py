from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['_id', 'name', 'phone', 'role', 'image', 'created_at', 'updated_at']
        read_only_fields = ['_id', 'created_at', 'updated_at']

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'phone', 'pin', 'role', 'image']
        extra_kwargs = {'pin': {'write_only': True}}

    def validate_phone(self, value):
        from .utils import validate_phone
        if not validate_phone(value):
            raise serializers.ValidationError("Invalid phone number")
        return value

class UserLoginSerializer(serializers.Serializer):
    phone = serializers.CharField()
    pin = serializers.CharField()