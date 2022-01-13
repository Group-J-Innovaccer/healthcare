from pyexpat import model
from django.db import models
from doctors.models import Doctor

# Create your models here.
class Patient(models.Model):
    patient_id=models.IntegerField(null=False)
    email=models.EmailField(null=False)
    firstname=models.TextField(null=False)
    lastname=models.TextField(null=False)
    dob=models.DateField(null=False)
    height=models.TextField(null=False)
    weight=models.TextField(null=False)
    phone=models.TextField(null=False)
    address=models.TextField(null=False)
    gender=models.TextField(null=False)
    emergency_contact=models.TextField(null=False)
    current_doctor=models.ForeignKey(Doctor, on_delete=models.PROTECT)

    def _str_(self):
        return self.id
