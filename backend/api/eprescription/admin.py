from django.contrib import admin
from .models import Prescription, Medication

# Register your models here.
admin.site.register(Prescription)
admin.site.register(Medication)