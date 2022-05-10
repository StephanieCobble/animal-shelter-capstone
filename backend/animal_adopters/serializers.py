
from rest_framework import serializers
from .models import AnimalAdopter

class AnimalAdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnimalAdopter
        fields = ['id', 'adopter_id', 'adopter_first_name', 'animal_id', 'adoption_date']
    
    #  fields = ['id', 'adopter_id', 'adopter_first_name', 'adopter_last_name', 'animal_id', 'animal_name', 'adoption_date']
    
    adopter_id = serializers.IntegerField(write_only=True)
    adopter_first_name = serializers.CharField(read_only=True)
    # adopter_last_name = serializers.CharField(write_only=True)
    animal_id = serializers.IntegerField(write_only=True)
    # animal_name = serializers.CharField(write_only=True)