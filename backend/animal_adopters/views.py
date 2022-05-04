
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import AnimalAdopterSerializer
from .models import AnimalAdopter

# Create your views here.

class AnimalAdopterList(APIView, IsAuthenticated):
    def get(self, request, format=None):
        animal_adopter = AnimalAdopter.objects.all()
        serializer = AnimalAdopterSerializer(animal_adopter, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = AnimalAdopterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class AnimalAdopterDetail(APIView, IsAuthenticated):
    def get_object(self, pk):
        try:
            return AnimalAdopter.objects.get(pk=pk)
        except AnimalAdopter.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        animal_adopter = self.get_object(pk)
        serializer = AnimalAdopterSerializer(animal_adopter)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        animal_adopter = self.get_object(pk)
        serializer = AnimalAdopterSerializer(animal_adopter, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        animal_adopter = self.get_object(pk)
        animal_adopter.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AnimalAdopterFK(APIView, IsAuthenticated):
    def get(self, request, fk, format=None):
        animal_adopter = AnimalAdopter.objects.filter(adopter=fk)
        serializer = AnimalAdopterSerializer(animal_adopter, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
