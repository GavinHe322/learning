from . import views
from django.urls import path

# 设置二级路由：路由信息得放在urlpatterns 数组中，名字是关键字

urlpatterns = [
    path('index', views.handleIndex)
]