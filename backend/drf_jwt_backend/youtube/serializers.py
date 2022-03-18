from dataclasses import fields
from rest_framework import serializers
from .models import Youtube_reply, Youtube_comment,Youtube_filter

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

class Youtube_filter_Seralizer(serializers.ModelSerializer):
   class Meta:
       model = Youtube_filter
       fields = filter(Youtube_comment)
       depth = 1 
