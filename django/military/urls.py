from . import views
from django.urls import path

urlpatterns = [
    path('list', views.handleList),
    path('add', views.handleAdd),
]