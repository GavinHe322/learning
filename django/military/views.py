from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import WeaponItem

# Create your views here.
def handleAdd(req):
    #接受参数
    name = req.GET['name']
    skill = req.GET['skill']
    # 存入数据库
    item = WeaponItem()
    item.name = name
    item.skill = skill
    # 返回服务端
    item.save()
    return HttpResponse('添加成功')

def handleList(req):
    result = WeaponItem.objects.values()

    # return HttpResponse('1')
    tpl = loader.get_template('military/military.html')
    namelist = [
        'gavin',
        'lucy',
    ]
    return HttpResponse(
         tpl.render({
            'title': 'hello world', 
            'list': result
        })
        
    )