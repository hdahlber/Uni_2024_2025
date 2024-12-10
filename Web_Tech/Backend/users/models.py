from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from .managers import CustomUserManager
#https://docs.djangoproject.com/en/5.1/topics/auth/customizing/

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()  # Use the custom manager

    def __str__(self):
        return self.username