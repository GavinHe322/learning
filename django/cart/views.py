from django.shortcuts import render
from django.http import HttpResponse
from .models import CartProduction
# Create your views here.

def handleAdd(req):
    title = req.GET['title']
    count = req.GET['count']
    item = CartProduction()
    item.title = title
    item.count = count
    item.save()
    return HttpResponse('add shopcart success')

def handleList(req):
    result = CartProduction.objects.values()
    return HttpResponse(result)
