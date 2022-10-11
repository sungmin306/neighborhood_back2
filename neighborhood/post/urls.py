from django.urls import path

from . import views

urlpatterns = [
    # path('', views.ListPost.as_view()),
    # path('<int:pk>/', views.DetailPost.as_view()),
    path('',views.get_api),
    path('postrequest/',views.post_api)
]