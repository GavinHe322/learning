# 使用 JDBC

步骤
- 全局创建 ```DataSource``` 实例,表示数据库连接池
- 在需要读写数据库的方法内部，按如下步骤访问数据库
 - 从全局 ```DataSource``` 实例获取 ```Connection``` 实例
 - 通过 ```Connection``` 实例创建 ```PreparedStatement``` 实例
 - 执行 ```sql``` 语句，如果是查询，则通过 ```ResultSet``` 读取结果集，如果修改，则获取 int 结果
