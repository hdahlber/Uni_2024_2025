from django.db import models
from users.models import User
from transactions.models import Transaction

# Create your models here.

class Product(models.Model):
    # item id (auto generated)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, default="")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    #owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True, blank=True)
    # image = models.ImageField(upload_to='product_images/', blank=True, null=True)
