# 常见数据类型
'''
    number  - int float complex boolean
    string  - 'jery'
    list    -  [0, 1, 2, 3]
    tuple   - 
    dict 
    set
'''
"""
    False      True
    def        continue
    if else    global
    raise      pass
    None       break
    del        in
    import     return 
    elif       try
    is         and 
    while      not
    as         except
    with       lambda
    finally    assert
    yield      nonlocal
    for
"""
age = 20
price = 20.5
isMember = False
myData = 3 + 3j

print(age, type(age))  #int
print(price, type(price)) #float
print(isMember, type(isMember)) #boolean
print(myData, type(myData)) #complex //复杂的数据类型

# print("age is " + age) # don't to string
# you can  %d 整数  #f 浮点数 #s 字符串  #c 复杂数据类型
print("age is %d" %age) 

chineseScrore = 60.5
mathScrore = 100
print( "语文成绩 %d 数学成绩%d" %(chineseScrore, mathScrore) )

print((chineseScrore + mathScrore) / 2)

scro = (chineseScrore + mathScrore) / 2
print("平均值是%f"%scro)

