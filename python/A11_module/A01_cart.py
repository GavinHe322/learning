# 模块与包
'''
    模块module 就是一个py文件
    package：就是一个文件夹，可以有多个模块
    模块之间的调用
    包之间的调用
'''
# 一个py 文件 就是一个模块

def addToCart():
    print('添加成功')


def submit():
    print('结算')

def pay():
    print('支付。。。')

# 如果是 import * 引入的模式  这用使用这里的方法
# 但是如果 是 A01_cart as cart  cart.pay() 还是能执行
__all__ = ['addToCart', 'submit']
