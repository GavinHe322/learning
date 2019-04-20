 #前提：pip install mysql-connector
 # mysql -connector
 # 处理思路：
'''
    引入连接数据库工具
    连接数据库
    执行CRUP操作
'''
import mysql.connector as conn

mql = conn.connect(
    host = 'localhost',
    user = 'root',
    passwd = '',
    database = 'music',
)

print(
    mql , type(mql) # 
)

# 创建游标对象 cursor 操作数据库进行查找时，
# 得到查询结果 记录位置和数据，避免一次性返回过多数据，
# 提高客户端处理的速度
cursor = mql.cursor()

# 执行CRUP 操作
# myOperation = 'select * from songsheet'
myOperation = 'insert into songsheet(singerImg, content) values("http://baidu.com", "内容")'
cursor.execute(myOperation)

# result = cursor.fetchall()  # 
print(
    # result
)

# 如果执行sql语句需要动态的数据 %s 占位
# 在sql操作中，涉及到修改、添加、删除的操作、必须再执行：
mql.commit()  # 修改 添加 必须用 commit() 提交一下

