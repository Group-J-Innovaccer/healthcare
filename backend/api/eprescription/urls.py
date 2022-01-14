from django.urls import include, path
from rest_framework import routers
from . import views


urlpatterns = [
    path('prescription/', views.PrescriptionList.as_view()),
    path('patientprescription/', views.PatientPrescriptionList.as_view()),
    path('medication/', views.medication_list),
    path('medication/<int:pk>', views.medication_detail),
    
]