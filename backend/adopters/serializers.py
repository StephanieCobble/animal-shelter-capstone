
from rest_framework import serializers
from .models import Adopter

class AdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adopter
        fields = ['id', 'user', 'first_name', 'last_name', 'street', 'city', 'state', 'zipcode']