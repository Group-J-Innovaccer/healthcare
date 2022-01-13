from django.contrib import admin
from .models import Prescription, Medication, PatientPrescription

# Register your models here.
admin.site.register(Prescription)
admin.site.register(Medication)
admin.site.register(PatientPrescription)
