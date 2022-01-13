from django.shortcuts import render

from rest_framework import viewsets
from .serializers import PatientSerializer
from .models import Patient
from rest_framework import generics
from rest_framework import mixins

# Patient list for doctor get API
class PatientList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class=PatientSerializer
    queryset=Patient.objects.all() #filter for doctor

    def get(self,request): 
        return self.list(request)

    def post(self,request):
        return self.create(request)


# Create new Patient PostAPI (doctor)

# Patient Detail for patient get API (doctor)

# Edit Patient Detail PutAPI (doctor)