
from django.urls import include, path
from rest_framework import routers
from . import views
from .models import Patient


urlpatterns = [
    path('list/', views.PatientList.as_view()),
    path('list/(?P<pk>[0-9]+)$', views.patient_detail),
    # url(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
]