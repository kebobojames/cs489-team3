from django.urls import path
from . import views

urlpatterns = [
	path('api/show_articles/', views.ShowArticlesListCreate.as_view())
]