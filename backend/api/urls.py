from django.urls import include, path
from rest_framework import routers
from . import views

urlpatterns = [
    path('list/', views.DoctorList.as_view()),
]
