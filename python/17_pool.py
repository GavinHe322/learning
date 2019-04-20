# 连接池的处理：
import mysql.connector.pooling as pool

# 创建连接池
mypool = pool.MySQLConnectionPool(
    pool_size = 32,
    host = 'localhost',
    user = 'root',
    passwd = '',
    database = 'music' 
)

# 从连接池中获取一个可用的连接

myConnection = mypool.get_connection()

print(
    myConnection, type(myConnection)
)

# 创建一个游标对象

cursor = myConnection.cursor()

cursor.execute('select * from music_user')

print(
    cursor.fetchall() #获取查询到的数据
)

uname = input("请输入用户名：")
upwd = input('请输入密码：')

cursor.execute("insert into music_user(uname, upwd) value(%s,%s)",(uname,upwd))

myConnection.commit()