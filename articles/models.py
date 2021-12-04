from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Users(models.Model):
	google_id = models.CharField(max_length = 100)
	username = models.CharField(max_length = 40)

class Topics(models.Model):
	topic_name = models.CharField(max_length = 40)
	date_created = models.DateField(auto_now_add = True)
	topic_image = models.ImageField(upload_to = 'images/%Y/%m/%d/')

class Articles(models.Model):
	topic_name = models.ForeignKey(Topics, null = True, on_delete = models.CASCADE)
	article_title = models.CharField(max_length = 100)
	article_text = models.CharField(max_length = 10000)
	polarization_score = models.FloatField(
		default = 50, 
		validators = [
			MaxValueValidator(100),
			MinValueValidator(0)
		]
	)

class Comments(models.Model):
	topic_name = models.ForeignKey(Topics, null = True, on_delete = models.CASCADE)
	article_id = models.ForeignKey(Articles, on_delete = models.CASCADE)
	quote = models.CharField(max_length = 100)
	comment_text = models.CharField(max_length = 300)
	upvotes = models.IntegerField(
		default = 0,
		validators = [
			MinValueValidator(0)
		]
	)