from django.shortcuts import render
from django.http import HttpResponse
from .models import ProductItem
import json
# Create your views here.

def handleIndex(req):
    # 如何使用models.py定义的模型类来完成插入操作？
    # return HttpResponse()
    item = ProductItem()
    item.title = 'macbook x 1'
    item.price = 13000
    item.save()
    # result = ProductItem.objects.all()
    result = ProductItem.objects.values()
    # print(result)
    return HttpResponse(result)

# localhost:8000/product/add?title=123&price=30
def handleAdd(req):
    # print(req, 'reqqqqqqqqqqqqqqqqqqqqqqqq')
    pTitle = req.GET['title']
    pPrict = req.GET['price']
    item = ProductItem()
    item.title = pTitle
    item.price = pPrict
    item.save()
    return HttpResponse('add success')

# localhost:8000/product/list 返回当前数据
def handleList(req):
    result = ProductItem.objects.values()
    return HttpResponse(result)

# cart/details?id=1 返回一个商品的title
def handleDetail(req):
    id = req.GET['id']
    item = ProductItem.objects.get(id=id)
    myDict = item.__dict__ # 读取模型对象中的属性,可以得到一个字典
    myDict.pop('_state')
    result = json.dumps(myDict)
    print(result, 'jssssssssssssssssssss')
    return HttpResponse(result)

# cart/modify?id=1&count=2 找到id为1的商品，将count修改为2
def handleModify(req):
    id = req.GET['id']
    count = req.GET['count']
    # 查询
    item = ProductItem.objects.get(id=id)
    #修改
    item.title = count
    item.save()
    return HttpResponse('商品修改为')