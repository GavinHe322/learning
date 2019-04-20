# python 常见标准库的使用
import json
# json 序列化：将数据变成一个json格式的字符串
# json 反序列：将json格式的字符串
# 反过来解析一个字典、数组等方便操作的数据类型

myDict = {
    'sutName': 'John',
    'sutAge': 20
}
myStr = json.dumps(myDict) #序列化
print(myStr, type(myStr)) #type str

#the json object must be str, 只能放 str 类型的
myData = json.loads(myStr) # 反序列化 

print(myData, type(myData))


import math  #数学处理、三角函数、取整。。
import random  #创建随机数、可以借助random模块
print( 
    random.randrange(60, 100) 
)
print(
    random.choice([
        'john',
        'michael',
        'lincoln'
    ])
)

import time
# %y %m %d %H %M %S
print(
    time.localtime(),
    time.strftime(
        '%y-%m-%d'
    )
)


import os.path # 处理路径

print(
    os.path.abspath('.'), #绝对路径
    os.path.abspath('..'),
    os.path.exists('C:/xampp'), # 判断路径是否存在
)

# python 内置了pip 