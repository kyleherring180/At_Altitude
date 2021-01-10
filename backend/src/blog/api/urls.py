from django.urls import path
from .views import PostListView, PostDetailView

urlpatterns = [
    path('blog/', PostListView.as_view()),
    path('blog/<pk>/', PostDetailView.as_view()),
]