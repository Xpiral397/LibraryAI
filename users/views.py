# views.py
import random
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
from .serializers import UserRegistrationSerializer, UserLoginSerializer
from .utils import getOTP
from datetime import datetime, timedelta;

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        serializer = UserRegistrationSerializer(data=request.POST)
        if serializer.is_valid():
            user = serializer.save()
            otp = getOTP(); 
            user.otp = otp
            user.otp_expiration_time = (datetime.now().timestamp()*1000) + datetime.timedelta(minutes=5)
            user.save()
            # Send OTP to user's mobile number (implementation required)
            return JsonResponse({'message': 'Registration successful. Please verify Your OTP.'})
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def verify_otp(request):
    if request.method == 'POST':
        matric_number = request.POST.get('matric_number')
        otp_entered = request.POST.get('otp')
        user = User.objects.get(matric_number=matric_number)
        _unexpiredOTP = (datetime.now().timestamp()*  1000 ) < user.otp_expiration_time;
        if user.otp == otp_entered and _unexpiredOTP:
            user.has_registration_completed = True
            user.save()
            return JsonResponse({'message': 'OTP verification successful. Registration completed.'})
        return JsonResponse({'error': 'Invalid OTP. Please try again.'}, status=400)

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        serializer = UserLoginSerializer(data=request.POST)
        if serializer.is_valid():
            matric_number = serializer.validated_data.get('matric_number')
            password = serializer.validated_data.get('password')
            user = authenticate(matric_number=matric_number, password=password)
            if user:
                # Generate and return JWT token
                token = generate_jwt_token(user)  # Function to generate JWT token
                return JsonResponse({'token': token})
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
        return JsonResponse(serializer.errors, status=400)
