#tuple 元组  带了手铐的数据 ( 存储是是一个有序序列，只能用来读，不可以修改
#            保存不希望被随意篡改的、注重安全性的数据 )

tuple = (100, 200, 300)   #用圆括号定义

print( tuple, type(tuple) )  #class tuple

tuple = (100) #如果定义的元祖只有一条数据  type -> int  需要至少一个(，)隔开

# dict -> dictionary 字典 是键值对的组合， 查找比较快


dict = {
    'a': 1  # 定义于 javaScript 对象一样 但是key 要用单引号引起来
} 

print(dict, type(dict))  #class -> dict

# dict.b = 1  # 'dict' object has no attribute 'b'
dict['b'] = 1   # 需要这样定义
print(dict)

# print( dict.a ) # has no 'b'

# 如果读取不存在的变量
# print( dict['c'] ) # keyError  'c'  
print( dict.get('c') )  #不存在为 None

# 删除 key
# dict.pop() # pop expected at least 1 arguments, got 0
dict.pop('b')  # 需要指定需要删除的键值
print(dict) 

# name = input()
# price = input()
# count = input()

# dict = {
#     'name': name,
#     'price': float(price),
#     'count': count
# }

# print( "购买%s件，名称:%s,花费%f" 
#         %(dict.get('count'), dict.get('name'), dict.get('price')) 
#      )

# set  存储一些不会重复的数据构成的无序集合

_set = set(
    [100, 200, 300]  #用过 set 定义
)

print(
    _set, type(_set)  
)

_set.add( 400 )  #写入操作

print( _set )

_set.remove( 100 ) #删除

print( _set )

_set = set(
    [100, 100]  #如果重复 实则存储一个
)

print(
    _set
)