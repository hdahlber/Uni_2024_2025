from rest_framework import serializers
from .models import Transaction, Product, User

class TransactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        
