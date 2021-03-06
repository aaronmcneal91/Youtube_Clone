from dataclasses import fields
from rest_framework import serializers
from .models import Youtube_reply, Youtube_comment, Youtube_filter

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Youtube_comment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Youtube_comment
        fields = ['id', 'user', 'text', 'likes', 'dislikes', 'video_id']
        depth = 1

class Youtube_reply_Seralizer(serializers.ModelSerializer):
    class Meta:
        model = Youtube_reply
        fields = ['id', 'user_id','comment_id_id','text']
        depth = 1
    comment_id_id = serializers.IntegerField(write_only = True)


    class Youtube_filter_Seralizer(serializers.ModelSerializer):
        class Meta:
         model = Youtube_filter
        fields= Youtube_comment
        depth = 1

