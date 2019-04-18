#方法定义

def test(a):
    print(a)
    return 0,1 #如果写了多个返回值，其实是一个tuple
    # == return (0, 1)


test = test(2)

# test(0, 1, 2, 3) #调用的参数 要和形参的数量一样  没有arguments
print(
    test, type( test ) #class tuple
)



# 可变长参数1
def connect(*_):
    print(
        _, type(_) # tppe tuple
    )

connect('localhost', 3306)
connect('localhost', 3306, 'gavin')


# 可变长参数2

def link(**_ ):
    print(
        _.get('host'), type( _ ) # type dict
    )

link(
    host = 'localhost',
    port = 3306,    
)

# 默认值参数
def test(host, port = 3306):
    print(host, port)

test('123', 3307)
test('456')

test(port = 3, host = '123')


# calc

def test (*_):
    total = 0
    for item in _:
        total += item
    return total / len(_)

total = test(1, 2, 3, 4, 5, 6, 7, 8, 9)
print(total)

def test(*_):
    total = 1
    for item in _:
        total *= item
    return total

total = test(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
print(total)
