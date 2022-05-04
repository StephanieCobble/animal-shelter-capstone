
from rest_framework import serializers
from .models import AnimalAdopter

class AnimalAdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnimalAdopter
        fields = ['id', 'adopter_id', 'animal_id', 'adoption_date']
    
    adopter_id = serializers.IntegerField(write_only=True)
    animal_id = serializers.IntegerField(write_only=True)