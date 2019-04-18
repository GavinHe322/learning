
# import order as order

# from order import getOrderList
from order import *

getOrderList()

def fn():
    a = 1
    def fnc():
        nonlocal a
        a += 2
        print(a, 'inner')
    fnc()
    print(a, 'outer')

fn()