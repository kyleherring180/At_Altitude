# Generated by Django 3.1.4 on 2021-01-03 15:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_images_is_highlight'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Images',
            new_name='PostImages',
        ),
    ]
