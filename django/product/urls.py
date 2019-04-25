from django.urls import path
from . import views

# urlpatterns
urlpatterns = [
    path('index', views.handleIndex),
    path('add', views.handleAdd),
    path('list', views.handleList),
    path('detail', views.handleDetail),
    path('modify', views.handleModify)
]