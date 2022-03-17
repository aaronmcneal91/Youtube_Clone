from django.db import models
from django.contrib.auth.models import User

class Youtube_reply(models.Models):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)