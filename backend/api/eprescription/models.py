from operator import mod
from ssl import PROTOCOL_TLS_CLIENT
from django.db import models
from datetime import datetime
from patients.models import Patient
from doctors.models import Doctor

class Prescription(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.PROTECT)
    doctor_id = models.ForeignKey(Doctor, on_delete=models.PROTECT)
    examination = models.TextField(null=False)
    investigation = models.TextField(null=False)
    diagnosis = models.TextField(null=False)
    advice = models.TextField(null=False)
    comment = models.TextField(null=False)
    chief_complain = models.TextField(null=False)
    active = models.BooleanField(null=False, default=True)
    secret = models.IntegerField()
    date = models.DateField(default=datetime.now())

    def __str__(self):
        return self.id

class Medication(models.Model):
    Medication_id = models.IntegerField(null=False)
    prescription_id = models.ForeignKey(Prescription, on_delete=models.PROTECT)
    medication_item = models.TextField(null=False)
    strength = models.TextField(null=False)
    preparation = models.TextField(null=False)
    route= models.TextField(null=False)
    dose = models.TextField(null=False)
    dorection = models.TextField(null=False)
    frequency = models.BooleanField(null=False, default=True)
    duration= models.DateField(default=datetime.now())
    total_quantity=models.IntegerField(null=False)

