from django.db import models
from users.models import User
# Create your models here.
class Transaction(models.Model):
    transaction_id = models.CharField(max_length=255, unique=True)
    date = models.DateTimeField(auto_now_add=True)
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="transactions")

def __str__(self):
    return self.transaction_id