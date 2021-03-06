from rest_framework import serializers
from .models import *

class UsersSerializer(serializers.ModelSerializer):
	class Meta:
		model = Users
		fields = ('id', 'google_id', 'username')


class TopicsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Topics
		fields = ('id', 'topic_name', 'date_created', 'topic_image')

class ArticlesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Articles
		fields = ('id', 'topic_name', 'news_site', 'author', 'date', 'article_title', 'article_text', 'polarization_score')

	def process_article(self, article_text):
		return True
		# raise serializers.ValidationError("Something went wrong while processing.")

class CommentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Comments
		fields = ('id', 'topic_name', 'article_id', 'quote', 'comment_text', 'upvotes')
