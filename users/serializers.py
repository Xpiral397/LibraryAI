from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

UserModel = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserModel
        fields = "__all__"      
            
        id = serializers.IntegerField(read_only=True)  
        name = serializers.CharField(required=True)
        email = serializers.EmailField(required=True)
        password = serializers.CharField(required=True, write_only=True)
        
class UserCreateSerializerAll(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserModel
        fields = "__all__"      
            

from .models import Genre, Book, UserAccount, Borrowing, PaymentAlert

class GenreSerializer(serializers.ModelSerializer):
     class Meta(UserCreateSerializer.Meta):
        model = Genre
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
     class Meta(UserCreateSerializer.Meta):
        model = Book
        fields = '__all__'

class BorrowingSerializer(serializers.ModelSerializer):
     class Meta(UserCreateSerializer.Meta):
        model = Borrowing
        fields = '__all__'

class PaymentAlertSerializer(serializers.ModelSerializer):
     class Meta(UserCreateSerializer.Meta):
        model = PaymentAlert
        fields = '__all__'

class UserAccountSerializer(serializers.ModelSerializer):
    borrowed_books = BookSerializer(many=True, read_only=True)
    payment_alerts = PaymentAlertSerializer(many=True, read_only=True)

    class Meta(UserCreateSerializer.Meta):
        model = UserAccount
        fields = ['id', 'email', 'username', 'date_of_birth', 'preferred_language', 'favorite_option', 'occupation', 'borrowed_books', 'payment_alerts']
        
        id = serializers.IntegerField(read_only=True)  
        name = serializers.CharField(required=True)
        email = serializers.EmailField(required=True)
        password = serializers.CharField(required=True, write_only=True)
