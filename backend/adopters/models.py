
from django.db import models
from authentication.models import User

class Adopter(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)
    phone = models.CharField(max_length=50, default=None)
    pets = models.CharField(max_length=50, default=None)
    pets_age = models.CharField(max_length=50, default=None)
    pets_species = models.CharField(max_length=50, default=None)
    pets_breed = models.CharField(max_length=50, default=None)
    pets_sex = models.CharField(max_length=50, default=None)
    adoption_date = models.DateField(null=True)


