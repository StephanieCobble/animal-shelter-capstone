from django.db import models
from authentication.models import User

class Animal(models.Model):
    name = models.CharField(max_length=255)
    species = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    sex = models.CharField(max_length=255)
    age = models.IntegerField()
    image = models.CharField(max_length=3000, default='')
    description = models.CharField(max_length=1000)
