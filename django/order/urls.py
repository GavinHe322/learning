from django.urls import path

from . import views

urlpatterns = [
    path('index', views.handleIndex),
    path('details', views.handleDetails),
]