from django.db import models

# Create your models here.
# 创建模型类
class ProductItem(models.Model):
    # 官方文档有
    title = models.CharField(max_length = 200)
    price = models.IntegerField()