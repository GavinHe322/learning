'''
    在python所谓的装饰器，本质就是一个代码/函数/方法 
    目标：
    在不能修改原有代码的情况下，对代码进行功能的扩展
    使用场景：用户认证，日志处理，性能调优、权限效验。。。
'''
# 当前实际业务中有一个添加购物车的需求
# 现在需要自原有业务基础之上，做一个功能扩展：验证用户是否登陆

# 如何定义一个装饰器函数
def checkLogin(func):
    def handle():
        # 实现执行扩展功能，比如检查用户有没有登陆之类的操作
        print('检查用户登陆')
        func()
    return handle

# OCP : open principle 对于扩展开放，对于修改关闭
@checkLogin
def addToCart():
    print('添加成功！')

addToCart()


def loginBefore(func):
    def loginInner(*_):
        print('登陆之前', *_)
        func(*_)
    return loginInner

@loginBefore
def login(uname):
    print(uname,'登陆成功')

login('zhangsan')

try:
    print(name)
except NameError:
    print( type(NameError )) #type
finally:
    print('怎么样都会执行') 

print('it is a test')

# 如何使用except 捕获多个错误

try:
    # score = int(input('请输入你的成绩:'))
    score = 1
    print('score is ' + score)
# 方法1：捕获所有可能会出现的错误
except Exception as msg:
    print('出错了', msg)

try:
    # score = int( input('请输入你的成绩') )
    score = 1
    print('score is ' + score)
except (TypeError, ValueError):
    print(TypeError, ValueError)

try:
    # 做一些代码的处理
    raise (TypeError('这是一个自定义的错误消息内容'))
except TypeError as msg:
    print(msg)

# raise( TypeError('外面的自定义错误消息内容') )
# print(1)

# 
try:
    arr = [1, 2, 3, 4]  
    print(arr[10])
except IndexError as msg:
    print('下标越界')

