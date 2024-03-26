# utils.py
from djoser.views import UserViewSet
from users.serializers import CustomUserSerializer
import random;

def get_user_serializer(user):
    return CustomUserSerializer

def getOTP():
    return ''.join(random.choice('123456789012345326789291028',k= 8))
