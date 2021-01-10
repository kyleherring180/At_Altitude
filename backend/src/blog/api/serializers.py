from rest_framework import serializers
from blog.models import Post, PostImages

class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImages
        fields = ['id', 'is_highlight', 'image']

class PostSerializer(serializers.ModelSerializer):
    images = PostImageSerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'content', 'images')