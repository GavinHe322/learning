list = [100, 200, 300]

# 类型是列
print(list, type(list))
# list index out of range
print(list[0], list[-2])

list = [1, 2, 3, 4, 5] #会重新赋值

list.append('末尾添加') # 1末尾添加
print(list)

list.insert(1, '这个是在1位置插入的数据') #在指定下标插入
print(list)

list.pop() # 在没有参数时 默认删除末尾元素

print(list)


list = [60, 70, 90, 100]
# append insert pop
print( len(list) ) #length -> 4

print( list.sort() )  #输出None
print(list)   #升序排序

list.sort( reverse = True) #降序

print( list )  #降序排序