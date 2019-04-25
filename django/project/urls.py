"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
Including another URLconf
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('mail/', include('mail.urls')),
    path('order/', include('order.urls')),
    path('user/', include('user.urls')),
    path('product/', include('product.urls')),
    path('cart/', include('cart.urls')),
    path('news/', include('news.urls')),
    path('military/', include('military.urls')),
]
