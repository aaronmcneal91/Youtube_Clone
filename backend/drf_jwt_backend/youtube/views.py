from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from .models import Youtube_comment, Youtube_reply, Youtube_filter
from .serializers import Youtube_reply_Seralizer, Youtube_comment_Serializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET', 'POST'])
def comment_list(request):

    if request.method == 'GET':
        youtube = Youtube_comment.objects.all()
        serializer = Youtube_comment_Serializer(youtube, many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Youtube_comment_Serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save(user=request.user)
        return Response(serializer.data, status = status.HTTP_201_CREATED)


@api_view(['GET','PUT','DELETE'])
def comment_detail(request,fk):
    youtube = get_object_or_404 (Youtube_comment, fk=fk)
    if request.method =='GET':      
        serializer = Youtube_comment_Serializer(youtube)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = Youtube_comment_Serializer(youtube, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method =='DELETE':
        youtube.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['GET'])
def reply_list(request):

    if request.method == 'GET':
        youtube = Youtube_reply.objects.all()
        serializer = Youtube_reply_Seralizer(youtube, many=True)
        return Response (serializer.data)

    


@api_view(['GET','PUT','DELETE','POST'])
def reply_detail(request,id):
    youtube = get_object_or_404(Youtube_reply, pk=id)
    if request.method =='GET': 
        replies = Youtube_reply.objects.filter(comment_id = id)     
        serializer = Youtube_reply_Seralizer(replies, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = Youtube_reply_Seralizer(youtube, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method =='DELETE':
        reply_detail.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def new_reply(request,comment_id):
    if request.method == 'POST':
        reply_data = request.data
        reply_data['comment_id'] = comment_id
        serializer = Youtube_reply_Seralizer(data = reply_data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user_id = request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
# create endpoint to retrieve all replies to specific comment_id
# .filter() by comment_id
# @api_view(['VIEW'])
# def replies_view(request,fk):
#     if request.method =='VIEW':
#         serializer = Youtube_comment_Serializer(comment_list = request.filter)
#         return Response(serializer.data)
# @api_view(['GET'])
# def find_comment(request,pk):
#     if request.method == 'GET':
#         youtube = Youtube_comment.objects.filter(comment_detail)
#         serializer = Youtube_comment_Serializer(youtube, many=True)
#         return Response (serializer.data)




    
  
