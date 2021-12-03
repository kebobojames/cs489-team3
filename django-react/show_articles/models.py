from django.db import models

# Create your models here.
class ShowArticles(models.Model):
	article_title = models.CharField(max_length = 100)
	article_text = models.CharField(max_length = 1000)