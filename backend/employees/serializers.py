
from rest_framework import serializers
from .models import Employee

class AdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'first_name', 'last_name', 'employee_since']