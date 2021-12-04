from .models import *
from .serializers import *
from rest_framework import generics
from django.shortcuts import render

# Create your views here.

class UsersListCreate(generics.ListCreateAPIView):
	queryset = Users.objects.all()
	serializer_class = UsersSerializer

class TopicsListCreate(generics.ListCreateAPIView):
	queryset = Topics.objects.all()
	serializer_class = TopicsSerializer

class ArticlesListCreate(generics.ListCreateAPIView):
	queryset = Articles.objects.all()
	serializer_class = ArticlesSerializer

class CommentsListCreate(generics.ListCreateAPIView):
	queryset = Comments.objects.all()
	serializer_class = CommentsSerializer