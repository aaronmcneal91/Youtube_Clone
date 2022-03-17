from django.contrib import admin
from .models import Youtube_comment, Youtube_reply

# Register your models here.
admin.site.register(Youtube_comment)
admin.site.register(Youtube_reply)
