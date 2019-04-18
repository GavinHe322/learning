
num1 = 10
num2 = "100"
num3 = 11
print(
    num1 % 4, # 2
    num1 + float(num2), #110
    num1 % 3, # 1
    num1 // num3, # 商下取证 0.9 -> 0  || 1.5 -> 1
    num1 ** num3, # num1 的 numb3 次方
)

# 比较运算  > >= < <= == !=
# 数组 和 元祖 会从第一个元素依次比较
list1 = [100, 200, 300]
list2 = [101, 200, 300]

print(
    list1 > list2 # False
)

# 字符串比较的是 编码值
name1 = 'abc'
name2 = 'abcd'
print(
    name1 > name2 # False
)

#javaScript 逻辑运算: &&  ||  !
#python逻辑运算 ：    and  or not

cScore = 100
mScore = 100

print(
    cScore > 90 and mScore > 90,# True
    cScore > 1000 or mScore > 90, # True
    not False, # True
)

# 赋值运算  不支持javaScript的 -- ++
# += -+ 

num1 = 1
num2 = 2
num1 += num2
print(
    num1, #3
)
list = [100, 200]
[num1, num2] = list  #类似js的对象结构

print(
    num1, num2
)

num1 = num2 = 10 #支持连等赋值
print(
    num1, num2
)

# year = int( input("请输入年份") )

# year = year % 4 == 0 and ( year % 100 != 0 or year % 400 == 0 )
# print(
#     year
# )

# 位运算  $ | ~ ^ << >>
num1 = int( '111100', 2 )
num2 = int( '100110', 2) 
#        $   100100
#        |   111110
# 2 4 8 16 32 64
print(
    num1, #60
    num2, #38
    num1 & num2, # 36
    num1 | num2, # 62
)

# 成员运算符
# 在列表、字典、元祖中判断某个元素是否存在
list = [1, 2, 3]

print( 
    3 in list, #true
    4 not in list, #true
)

dict = {
    'age': 18,
    'name': 'gavin',
}
print(
    'age' in dict, # true
    18 in dict,    # false 按 key 查找
)

# 引用类型: 数组、数组、元祖
list1 = [100, 200]
list2 = list1
print(
    list1, list2
)

list1[0] = '我变了'
print(
    list1, list2,
    id(list1), id(list2), # 获取元素id
    list1 is list2,  # true  list1 是 list2 的地址吗
    list is list1,   # false list 是list2 的地址吗
)