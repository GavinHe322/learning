# 控制流 (循环， 条件)
# 程序的设计是有三种结构构成：顺序、循环、选择
# for while do-while

list = [
    [100, 200], 
    [300, 400], 
    [500, 600]
]
print(list)
for tem in list:
    for t in tem:
        print(t)

print(
    # range(start, end) 方法可以生成start,end截止的序列，
    # 如果没有写start，默认从0开始
    range(3), 
    range(1, 3),
    range(1, 10, 2),
    'range',
)
list = [1, 2, 3, 4, 5]
for tem in range( len(list) ):
    # print(tem, type(tem)) # 0 1 2 class: int
    print(list[tem], '用range输出的')

count = 0
while count < 10:
    count += 1
    print(
        count, '为啥不能输出'
    )

score = 80
if score >= 60:
    print('成绩及格')
else:
    print('成绩不合格')

score = 59
if score > 90:
    print('A')
elif score > 80:
    print('B')
elif score > 60:
    print("C")
else:
    print('D')

import random
num = random.randrange(100)
# print(num)
while True:
    num2  = float( input('猜数字') )
    if (num2 > num):
        print('猜对了%i'%num)
        break
    else:
        print('猜错了%i'%num)