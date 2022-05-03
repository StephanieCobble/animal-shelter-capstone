from rest_framework import serializers
from .models import LostAnimal

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = LostAnimal
        fields = ['id', 'name', 'species', 'breed', 'sex', 'age', 'image', 'description', 'date_found']