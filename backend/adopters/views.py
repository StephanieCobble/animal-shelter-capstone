from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import AdopterSerializer
from .models import Adopter

# Create your views here.
class AdopterList(APIView, AllowAny):
    def get(self, request, format=None):
        adopter = Adopter.objects.all()
        serializer = AdopterSerializer(adopter, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = AdopterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class AdopterDetail(APIView, IsAuthenticated):
    def get_object(self, pk):
        try:
            return Adopter.objects.get(pk=pk)
        except Adopter.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        adopter = self.get_object(pk)
        serializer = AdopterSerializer(adopter)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):    #updates
        adopter = self.get_object(pk)
        serializer = AdopterSerializer(adopter, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        adopter = self.get_object(pk)
        delete_conf = {
            "Your account has been deleted. We're sad to see you go!": adopter.first_name
        }
        adopter.delete()
        return Response(delete_conf, status=status.HTTP_200_OK)

