from .models import ShowArticles
from .serializers import ShowArticlesSerializer
from rest_framework import generics
from django.shortcuts import render

# Create your views here.
class ShowArticlesListCreate(generics.ListCreateAPIView):
	queryset = ShowArticles.objects.all()
	serializer_class = ShowArticlesSerializer