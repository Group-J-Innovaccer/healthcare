from rest_framework import viewsets
from .serializers import *
from .models import Prescription,Medication
from rest_framework import generics
from rest_framework import mixins 
#from rest_framework.decorators import api_View
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status



class PrescriptionList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = PrescriptionSerializer
    queryset = Prescription.objects.all()

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class MedicationList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = MedicationSerializer
    queryset = Medication.objects.all()

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class PatientPrescriptionList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = PrescriptionSerializer
    queryset = Prescription.objects.all()

    def get(self, request):
        return self.list(request)
class doctoraddnewprescription(mixins.CreateModelMixin,generics.GenericAPIView):
    serializer_class=PrescriptionSerializer
    queryset=Prescription.objects.all()

    def post(self, request):
        return self.create(request)
# class patientviewPrescription(generics.GenericAPIView, mixins.ListModelMixin):
#     serializer_class=PrescriptionSerializer
#     queryset=Prescription.objects.all()

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs) 


# Prescription (Rachna)
# Add new Prescription PostAPI (doctor)

# Add new medication PostAPI (doctor)

# View Prescription GetAPI (patient)

# View Prescription GetAPI (doctor)

# View Medication GetAPI (patient)

# View Medication GetAPI (doctor)