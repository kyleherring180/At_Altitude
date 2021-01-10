from django.db import models
import uuid

class Post(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title

def get_image_filename(instance, filename):
    id = instance.post.id
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return 'post_{0}/{1}'.format(id, filename)

class PostImages(models.Model):
    post = models.ForeignKey(Post, related_name='images', default=None, on_delete=models.CASCADE)
    is_highlight = models.BooleanField(default=False)
    image = models.ImageField(upload_to=get_image_filename,
                              verbose_name='Image')
