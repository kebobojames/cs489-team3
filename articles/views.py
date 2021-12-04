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

class ArticlesListCreate(APIView):
	def post(self, request):
		print(request.data)
		serializer = ArticlesSerializer(data = request.data)
		if serializer.is_valid():
			serializer.save()
			return Response({'success': True})
		else:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentsListCreate(generics.ListCreateAPIView):
	queryset = Comments.objects.all()
	serializer_class = CommentsSerializer