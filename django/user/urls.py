from django.urls import path
from . import views
urlpatterns = [
    path('', views.handleUser),
    path('login', views.handleLogin),
    path('register', views.handleregister)
]