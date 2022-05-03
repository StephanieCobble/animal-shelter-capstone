
from rest_framework import serializers
from .models import AnimalAdopter

class AnimalAdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnimalAdopter
        fields = ['id', 'adopter', 'animal', 'adoption_date']