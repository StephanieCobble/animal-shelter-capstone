
from django.db import models
from authentication.models import User

class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_since = models.DateField()

