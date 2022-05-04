from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from .import views

urlpatterns = [
    path('',views.AnimalAdopterList.as_view()),
    path('<int:pk>/', views.AnimalAdopterDetail.as_view()),  #http://127.0.0.1:8000/api/animaladopters/7/
    path('petsowners/<int:fk>/', views.AnimalAdopterFK.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)