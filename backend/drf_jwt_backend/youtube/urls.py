from django.urls import path
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<
urlpatterns = [
    path('', views.comment_list),
    path('<int:pk>/', views.comment_detail),
    path('reply/', views.reply_list),
    path('reply/<int:id>/', views.reply_detail),
    path('newreply/<int:comment_id>/', views.new_reply)
]

