from django.db import models

# Create your models here.

class CartProduction(models.Model):
    title = models.CharField(max_length = 20)
    count = models.IntegerField()
