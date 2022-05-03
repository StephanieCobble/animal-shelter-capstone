from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import LostAnimalSerializer
from .models import LostAnimal
# Full CRUD
# Create your views here.

class LostAnimalList(APIView):
    def get(self, request, format=None):
        animals = LostAnimal.objects.all()
        serializer = LostAnimalSerializer(animals, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = LostAnimalSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class LostAnimalDetail(APIView):
    def get_object(self, pk):
        try:
            return LostAnimal.objects.get(pk=pk)
        except LostAnimal.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        animal = self.get_object(pk)
        serializer = LostAnimalSerializer(animal)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):    #updates
        animal = self.get_object(pk)
        serializer = LostAnimalSerializer(animal, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        animal = self.get_object(pk)
        delete_conf = {
            "The following animal has been found (removed from lost animals)": animal.name
        }
        animal.delete()
        return Response(delete_conf, status=status.HTTP_200_OK)

    # If I want to add likes/saves for animals
    # def patch(self, request, pk, format=None):
    #     animal = self.get_object(pk)
    #     animal.like += 1
    #     serializer = LostAnimalSerializer(animal, data=request.data, partial=True) 
    #     like_count_response = {
    #         "Animal ": animal.title,
    #         "Likes": animal.like
    #     }
    #     if serializer.is_valid():
    #         animal.save()
    #         return Response(like_count_response, status=status.HTTP_200_OK)
    #     return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)