from dataclasses import fields
from rest_framework import serializers

from backend.drf_jwt_backend.youtube.reply_model import Youtube_reply
from .comment_models import Youtube_reply, Youtube_comment

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Youtube_comment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Youtube_comment
        fields = ['id', 'user', 'text', 'likes', 'dislikes']
        depth = 1

class Youtube_reply_Seralizer(serializers.ModelSerializer):
    class Meta:
        model = Youtube_reply
        fields = ['id', 'user','comment','text']
        depth = 1