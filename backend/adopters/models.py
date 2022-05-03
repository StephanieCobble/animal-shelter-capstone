from statistics import mode
from django.db import models
from authentication.models import User

class Adopter(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=50)
    zipcode = models.IntegerField()



# Create your models here.
