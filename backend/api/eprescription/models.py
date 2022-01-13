from django.db import models
from datetime import datetime

# Create your models here.
class Prescription(models.Model):
    patient_id = models.IntegerField(null=False)
    doctor_id = models.IntegerField(null=False)
    examination = models.TextField(null=False)
    investigation = models.TextField(null=False)
    diagnosis = models.TextField(null=False)
    advice = models.TextField(null=False)
    comment = models.TextField(null=False)
    chief_complain = models.TextField(null=False)
    active = models.BooleanField(null=False, default=True)
    date = models.DateField(default=datetime.now())

    def __str__(self):
        return self.id
