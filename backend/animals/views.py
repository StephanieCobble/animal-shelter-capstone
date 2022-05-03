from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import AnimalSerializer
from .models import Animal
# Full CRUD 
# Create your views here.

class AnimalList(APIView, AllowAny):
    def get(self, request, format=None):
        animals = Animal.objects.all()
        serializer = AnimalSerializer(animals, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # def post(self, request, format=None):
    #     serializer = AnimalSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)

class CreateAnimal(APIView, IsAuthenticated):
    def post(self, request, format=None):
        serializer = AnimalSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class AnimalDetail(APIView, IsAuthenticated):
    def get_object(self, pk):
        try:
            return Animal.objects.get(pk=pk)
        except Animal.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        animal = self.get_object(pk)
        serializer = AnimalSerializer(animal)
        return Response(serializer.data, status=status.HTTP_200_OK)   

    def put(self, request, pk, format=None):    #updates
        animal = self.get_object(pk)
        serializer = AnimalSerializer(animal, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        animal = self.get_object(pk)
        delete_conf = {
            "The following animal has found their furrever home! (removed from  animals)": animal.name
        }
        animal.delete()
        return Response(delete_conf, status=status.HTTP_200_OK)