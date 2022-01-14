from django.shortcuts import render

from rest_framework import viewsets
from .serializers import PatientSerializer
from .models import Patient
from rest_framework import generics
from rest_framework import mixins
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view

# Patient list for doctor get API
class PatientList(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class=PatientSerializer
    queryset=Patient.objects.all() #filter for doctor

    def get(self,request): 
        return self.list(request)

# Patient form for doctor to add patient POST API

class PatientForm(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class=PatientSerializer

    def post(self,request):
        return self.list(request)