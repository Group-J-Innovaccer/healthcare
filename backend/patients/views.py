from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer
from .models import Patient
from rest_framework import generics
from rest_framework import mixins

# Create your views here.

class PatientList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class=PatientSerializer
    queryset=Patient.objects.all()

    def get(self,request):
        return self.list(request)

    def post(self,request):
        return self.create(request)