from django.contrib import admin

from backend.drf_jwt_backend.youtube.reply_model import Youtube_reply
from .comment_models import Youtube_comment

# Register your models here.
admin.site.register(Youtube_comment,Youtube_reply)
