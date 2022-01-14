from operator import mod
from ssl import PROTOCOL_TLS_CLIENT
from django.db import models
from datetime import datetime
from api.patients.models import Patient
from api.doctors.models import Doctor

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
        # return self.patient_id + ' ' + self.date
        return self.examination

class Medication(models.Model):
    prescription_id = models.ForeignKey(Prescription, on_delete=models.PROTECT)
    medication_item = models.CharField(max_length=30, null=False)
    strength = models.CharField(max_length=20, null=False)
    preparation = models.CharField(max_length=20, null=False)
    route= models.CharField(max_length=20, null=False)
    dose = models.CharField(max_length=20, null=False)
    direction = models.CharField(max_length=20, null=False)
    frequency = models.BooleanField(null=False, default=True)
    duration= models.DateField(default=datetime.now())
    total_quantity=models.IntegerField(null=False)

    def __str__(self):
        return self.medication_item

