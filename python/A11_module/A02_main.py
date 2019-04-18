# 创建随机数
import random
print(
    random.randrange(10)
)
#  如果文件是 数字开头 则会有路径问题
# from A01_cart import addToCart, submit  #引入单个模块
# from A01_cart import * # 引入所有的属性和方法

import A01_cart as cart  # 直接引入模块
def handleCart():
    # 调用01_cart.py中的方法
    print('handleCart')
    cart.addToCart()
    cart.submit()

handleCart()
cart.pay()
