from rest_framework import serializers
from .comment_models import Youtube

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class YoutubeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Youtube
        fields = ['id', 'make', 'model', 'year', 'user_id']
        depth = 1
