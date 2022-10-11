from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Account
from django.http import HttpResponse, JsonResponse
from django.views import View
import json
import bcrypt
import jwt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PostSerializer, commentSerializer
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
# # Create your views here.

# @csrf_exempt
# def SignUp(request):
#     global dic
#     dic = {}
#     n=1
#     print("SugnUp으로 들어옴")
#     if(request.method == 'POST'):
#         print("if문 들어옴")
#         data = json.load(request)
#         print(data['home_num'])
#         print("돌아간다.")
#         if Account.objects.filter(email = data['email']).exists():
#             dic['message'] = '이메일이 이미 존재합니다.' 
#             n=0
#             #return JsonResponse({'message' : '이메일이 이미 존재합니다.'},status=400)
#         elif Account.objects.filter(name = data['name']).exists():
#             dic['message'] = '닉네임이 이미 존재합니다.'
#             n=0
#             #return JsonResponse({'message' : '닉네임이 이미 존재합니다.'},status=400)
#         else: 
#             password=data['password']
#             check_password=data['check_password']
#             if password != check_password:
#                 dic['message'] = '비밀번호가 같지 않습니다.'
#                 n=0
#             #return JsonResponse({'message' : '비밀번호가 같습니다.'},status=400)
#         if n==1:
#             Account.objects.create(
#                 email = data['email'],
#                 name = data['name'],
#                 password=data['password'],
#                 #password = bcrypt.hashpw(data["password"].encode("UTF-8"), bcrypt.gensalt()).decode("UTF-8"),
#                 home = data['home'],
#                 home_num = data['home_num'],
#                 bank = data['bank'],
#                 bank_num=data['bank_num'],
#             ).save()
#             dic['message'] = '로그인 성공'   
#         #return HttpResponse(status=200)
#     if n==1:
#         return JsonResponse(dic,status=200)
# #     else:
# #         return JsonResponse(dic,status=400)

# def login(request):
#     if(request.method == 'POST'):
        