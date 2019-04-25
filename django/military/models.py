from django.db import models

# Create your models here.
class WeaponItem(models.Model):
    name = models.CharField(max_length = 200)
    skill = models.CharField(max_length = 200)