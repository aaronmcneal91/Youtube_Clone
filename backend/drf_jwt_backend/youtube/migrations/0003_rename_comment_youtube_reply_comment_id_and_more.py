# Generated by Django 4.0.3 on 2022-03-21 16:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('youtube', '0002_rename_user_youtube_reply_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='youtube_reply',
            old_name='comment',
            new_name='comment_id',
        ),
        migrations.RenameField(
            model_name='youtube_reply',
            old_name='user',
            new_name='user_id',
        ),
    ]
