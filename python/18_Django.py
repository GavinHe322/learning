# Django makes it easier to build better web apps more
# quickly and with less code
'''
  Django 是一个框架，可以帮组用更少的代码， 更方便的来实现前端网站！
'''
'''
    基础指令
    路由系统
    ORM
    模板系统
'''
'''2.
    特点：
        1.集成度比较高、功能比较强大
            内置了完善的路由系统、模板系统、后台数据管理功能。。。
        2.基于django的工具也比较多
        3.强大的后台管理系统
'''
# pip install -i https://pypi.douban.com/simple django
# pip install django=2.0
# django-admin startproject 'name!' #创建项目
# py manage.py runserver  #运行

'''
    完成一个基于Django的工程的创建和运行
    使用路由系统
    基于：project 和 app
    一个project可以包含多个app
'''

# py manage.py startapp 创建一个

# 3. 使用路由系统
# 路由：建立起一种url和视图之前的印设关系


# 4. ORM
'''
    Object Relational Mapping -> 对象关系映射
    不用写sql，按照对象的操作，就可以实现数据库的增删改查
    使用模型类来完成数据的CRUD
    使用后台管理系统直接以可视化的方式操作数据
    使用模型类 需要在项目/settings 配置app
    py manage.py makemigrations 迁移  模型类的激活
    py manage.py migrate 才能生效
'''
# 5 