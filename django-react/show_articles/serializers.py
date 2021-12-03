from rest_framework import serializers
from .models import ShowArticles

class ShowArticlesSerializer(serializers.ModelSerializer):
	class Meta:
		model = ShowArticles
		fields = ('id', 'article_title', 'article_text')