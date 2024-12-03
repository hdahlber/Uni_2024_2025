from rest_framework import serializers
from .models import User  

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password'] 
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Use the custom manager to create a user
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user