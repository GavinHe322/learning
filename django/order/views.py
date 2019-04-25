from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def handleIndex(req):
    return HttpResponse('这是订单首页')

def handleDetails(req):
    return HttpResponse('这是订单详情页面')
