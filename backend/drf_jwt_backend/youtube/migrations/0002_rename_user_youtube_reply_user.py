# Generated by Django 4.0.3 on 2022-03-18 19:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('youtube', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='youtube_reply',
            old_name='User',
            new_name='user',
        ),
    ]
