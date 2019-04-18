# 准备在当前的模块用 调用另外一个包中的快方法

# import from

# from A12_module.order import *
# from A12_module.info import *
# getOrderList()
# getAvatar()
#------------------------------------------
# import A12_module.info as info
# import A12_module.order as order

# info.getAvatar()
# order.getOrderList()

#------------------------------------------
# from A12_module import info

# 包当中模块在被按照*方式引入时， 不允许被成功引入！
# 但是可以设置成可以这么做

from A12_module import *
info.getAvatar()
