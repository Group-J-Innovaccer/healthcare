from django.db import models
from datetime import datetime

from django.db.models.expressions import F


# Create your models here.

class Doctor(models.Model):
    doctor_id = models.IntegerField(null=False)
    email = models.EmailField(null=False)
    firstname = models.CharField(max_length=40, null=False)
    lastname = models.CharField(max_length=40, null=False)
    password = models.CharField(max_length=40,null=False)
    qualification = models.CharField(max_length=40,null=False)
    specialization = models.CharField(max_length=40,null=False)
    dob = models.DateField(null=False)
    phone_no = models.PositiveBigIntegerField(null=False)
    gender = models.CharField(max_length=5, null=False)
    registration_no = models.IntegerField(null= False)

    def _str_(self):
        return self.id


