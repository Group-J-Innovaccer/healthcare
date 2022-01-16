from django.urls import include, path
from rest_framework import routers
from . import views


urlpatterns = [
    path('prescription/', views.PrescriptionList.as_view()),
    path('patientprescription/', views.PatientPrescriptionList.as_view()),
    path('medication/', views.MedicationList.as_view()),
    path('addprescription/',views.doctoraddnewprescription.as_view()),
    path('patientviewprescription/<int:pk>',views.prescription_detail_by_id),
    #path('Doctorviewprescription/<int:pk>',views.prescription_detail_by_id),
    path('docmedicationlist/', views.doctor_medication_list),
    path('patientmedicationlist/', views.patient_medication_list),
    path('medicationbyid/<int:pk>', views.medication_detail_by_id),




   # path('createmedication/', views.MedicationListView.as_view()),
]