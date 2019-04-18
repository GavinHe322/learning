# 嵌套函数作用域

# local ->  embedded -> global -> BuiltIn
#  局部     嵌套外层函数   全局    内置

globalCount = 0

def outer():
    # globalCount +=  1 # referenced error
    global globalCount
    globalCount += 1  # right 
    print(globalCount)

outer()
outer()
outer()
print(
    globalCount  #
)

def func():
    num = 10
    print('in func num is %d'%num)

# 方法调用
func()
# print(num) #num is not defined scope


count = 0
def modifyCount():
    # global count
    count = 2
    count += 1
    print(count)
    # local variable 'count' referenced before assignment
    # print("in modifyCount: count is %d"%count) 


modifyCount()
modifyCount()
modifyCount()
print(count)




# Build-In
num = '30'
print(
    type( int(num) ),'num' # class int
)

def int(*_):
    print(type(_)) #tuple

int(num)

count = 100
def outer():
    count = 0
    def inner():
        nonlocal count
        print('inner func is called %d'%count)  
        count += 1
    return inner

func = outer()  #闭包
func()
func()
print(count)


def getLists():
    getList =  []

    
    def login(uname):
        nonlocal getList
        getList.append(uname)
        print(getList, hex( id(getList)))
    return login
func = getLists()
func('tom1')
func('tom2')
func('tom3')
print(
    func, type(func), # class function
    func.__closure__
)


# 值类型  number/string 、引用类型(list/tuple/dict/set)
def func(count):
    count += 1
    print('in func count is %d'%count) 

myCount = 1
func(myCount)
print(myCount)  # 值类型 不改变原变量

def pay(myDic):
    myDic['money'] -= 10
    print('in pay myDic is', myDic)
AccountDic = {
    'money': 100
}

pay(AccountDic)
 # 因为是引用类型 指向同一个地址  当地址的变量改变时 则所引用他的变量都会改变
print(AccountDic) 

def pay():
    print('pay func is called')
pay()

# 如果在python中定义匿名函数的定义
add = lambda a,b: a + b
print(
    add(3,5)
)

