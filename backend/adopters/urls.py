from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from .import views

urlpatterns = [
    path('',views.AdopterList.as_view()),
    path('<int:pk>/', views.AdopterDetail.as_view()),  #http://127.0.0.1:8000/api/adopters/1/
]

urlpatterns = format_suffix_patterns(urlpatterns)