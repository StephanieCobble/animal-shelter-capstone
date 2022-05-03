from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from .import views

urlpatterns = [
    path('',views.EmployeeList.as_view()),
    path('<int:pk>/', views.EmployeeDetail.as_view()),  #http://127.0.0.1:8000/api/employee/1/
]

urlpatterns = format_suffix_patterns(urlpatterns)