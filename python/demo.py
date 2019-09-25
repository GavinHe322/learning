# 求 s = a + a + aaa + aaa + aa... 的值，其中 a 是一个数字，
# 列如 3 + 22 + 222 + 2222 + 22222 此时有五个数相加 几个数相加由键盘控制

a = input('被加数')
n = int(
    input('加几次')
)
for i in range(n):
    res = int(a)
    a += a[0]
    print('结果是: ', res)
