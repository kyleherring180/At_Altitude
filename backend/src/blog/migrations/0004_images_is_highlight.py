# Generated by Django 3.1.4 on 2021-01-03 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='images',
            name='is_highlight',
            field=models.BooleanField(default=False),
        ),
    ]
