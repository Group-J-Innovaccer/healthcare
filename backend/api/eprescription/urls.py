from django.urls import include, path
from rest_framework import routers
from . import views


urlpatterns = [
    path('prescription/', views.PrescriptionList.as_view()),
    path('patientprescription/', views.PatientPrescriptionList.as_view()),
    path('docmedicationlist/', views.doctor_medication_list),
    path('patientmedicationlist/', views.patient_medication_list),
    path('prescriptiondata/', views.PrescriptionList.as_view()),
    path('medicationdata/', views.MedicationList.as_view()),

    path('medicationbyid/<int:pk>', views.medication_detail_by_id),
    

]