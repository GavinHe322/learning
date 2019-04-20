# 定义一个类
class Ticket():
    oid = 0
    countent = ''
    def calcPrice(self, arg):
        print('当前小票总价是80', self.oid, arg)
# 调用类：类的实例化 （将一个类变成一个对象、实例的过程）
t = Ticket()
print(t.oid)
t.calcPrice(123)

class Car():
    brand = ''
    def drive(self, task):
        self.brand = task
        print("%s正在行驶"%self.brand)

car = Car()

car.drive('奔驰')

# 在python 中 如何完成继承和多态的处理？？
class Order():
    oid = 0
    price = 0 
    def __init__(self, oid, price):
        self.oid = oid
        self.price = price

# 将Order 实例化一个对象
myOrder = Order(90, 100)
print(myOrder.oid)

class DeliveryOrder(Order):
    # super()
    DeliverySender = '' #保存时配送人员信息
    def __init__(self, Sender, oid, price):
        self.DeliverySender = Sender
        print( type(super), super(), 'super')
        super().__init__(oid, price)


Sender = DeliveryOrder('zhangsan',1, 2)
print(Sender.oid, Sender.price, Sender.DeliverySender)
    

# 多态的实现
class Car2():
    def deive(self):
        print('汽车正在驾驶')

class SUV(Car):
    pass
    # def drive(self):
    #     print('汽车正在越野。。。。')

myCar = Car2()
mySUV = SUV()

myCar.deive()
mySUV.drive('12')


class Monestor():
    hp = 100
    def run(self):
        print('小怪兽正在移动 hp%d'%self.hp)

class Boss(Monestor):
    hps = 1000
    def run(self):
        self.hps -= self.hp
        print('大boss正在移动。。。%d'%self.hps)
monestor = Monestor()
boss = Boss()
monestor.run()
boss.run()
boss.run()
boss.run()
boss.run()