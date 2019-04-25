from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def handleLogin(req):
    return HttpResponse('这是登录页')

def handleregister(req):
    return HttpResponse('this is register page')

def handleUser(req):
    return HttpResponse('用户页面')