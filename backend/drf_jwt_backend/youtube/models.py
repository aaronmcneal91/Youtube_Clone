from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Youtube_comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=30)
    text = models.CharField(max_length=100)
    likes = models.IntegerField()
    dislikes = models.IntegerField()


class Youtube_reply(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_id = models.ForeignKey(Youtube_comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)

class Youtube_filter(models.Model):
    comment = models.ForeignKey(Youtube_comment, on_delete=models.CASCADE)
   
