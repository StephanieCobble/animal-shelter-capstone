from django.db import models
from authentication.models import User
from adopters.models import Adopter
from animals.models import Animal

class AnimalAdopter(models.Model):
    adopter = models.ForeignKey(to=Adopter, on_delete=models.CASCADE)
    animal = models.ForeignKey(to=Animal, on_delete=models.CASCADE)
    adoption_date = models.DateField()
