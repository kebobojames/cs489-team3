from django.urls import path
from . import views

urlpatterns = [
	path('api/articles/', views.ArticlesListCreate.as_view()),
	path('api/users/', views.UsersListCreate.as_view()),
	path('api/topics/', views.TopicsListCreate.as_view()),
	path('api/comments/', views.CommentsListCreate.as_view())
]