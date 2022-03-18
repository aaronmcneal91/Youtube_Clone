from django.urls import path, include
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.comment_list),
    path('<int:pk>/', views.comment_detail),
    path('', views.reply_list),
    path('<int:pk>/', views.reply_detail)
    # path('all/', views.get_all_youtube),

]