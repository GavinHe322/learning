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
    # 通过Django 的模板系统，加载html文件，返回给客户端
    # Django 是遵循MVT的设计模式，models负责处理数据，templates负责定义模板内容
    # 最终通过templates返回模板内容
    tpl = loader.get_template('news/list.html')
    nameList = [
        'gavin',
        'lucy',
    ]
    # render 方法是支持传参的，但是参数必须是一个字典
    return HttpResponse(
        tpl.render({
            'title': 'hello world', 
            'list': nameList
        })
    )