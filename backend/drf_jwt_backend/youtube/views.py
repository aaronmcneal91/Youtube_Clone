from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from backend.drf_jwt_backend.youtube.reply_model import Youtube_reply
from .comment_models import Youtube_comment,  
from .serializers import Youtube_reply_Seralizer, Youtube_comment_Serializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET', 'POST'])
def youtube_list(request):

    if request.method == 'GET':
        youtube = Youtube_comment.objects.all()
        serializer = Youtube_comment_Serializer(youtube, many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Youtube_comment_Serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)


@api_view(['GET','PUT','DELETE'])
def youtube_detail(request,pk):
    youtube = get_object_or_404 (Youtube_comment, pk=pk)
    if request.method =='GET':      
        serializer = Youtube_comment_Serializer(youtube)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = Youtube_comment_Serializer(youtube, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method =='DELETE':
        youtube_detail.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['GET', 'POST'])
def youtube_detail(request):

    if request.method == 'GET':
        youtube = Youtube_reply.objects.all()
        serializer = Youtube_reply_Seralizer(youtube, many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Youtube_reply_Seralizer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)


@api_view(['GET','PUT','DELETE'])
def youtube_detail(request,pk):
    youtube = get_object_or_404(youtube, pk=pk)
    if request.method =='GET':      
        serializer = Youtube_reply_Seralizer(youtube)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = Youtube_reply_Seralizer(youtube, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method =='DELETE':
        youtube.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
