from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from .import views

urlpatterns = [
    path('',views.LostAnimalList.as_view()),
    path('<int:pk>/', views.LostAnimalDetail.as_view()),  #http://127.0.0.1:8000/api/lost/7/
    path('create/', views.CreateLostAnimal.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)