from django.shortcuts import render

from django.http import HttpResponse


# Create your views here.

def handleIndex(req):
    return HttpResponse('<div>  happy birthday to me ! </div>')