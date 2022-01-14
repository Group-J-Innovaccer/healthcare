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
class PatientList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class=PatientSerializer
    queryset=Patient.objects.all() #filter for doctor

    def get(self,request): 
        return self.list(request)

    def post(self,request):
        return self.create(request)


# Create new Patient PostAPI (doctor)
    # @api_view(['POST'])
    # def addPatientByDoctor(request):
    #     return self.create(request)

# Patient Detail for patient get API (doctor)
    # @api_view(['GET'])
    # def patientListViewDoctor(request):
    #     if request.method == 'GET':
    #         queryset=Patient.objects.all

# Edit Patient Detail PutAPI (doctor)
    # @api_view(['PUT'])
    

@api_view(['GET', 'PUT', 'DELETE'])
def patient_detail(request, pk):
    try: 
        patient = Patient.objects.get(pk=pk) 
    except Patient.DoesNotExist: 
        return JsonResponse({'message': 'The {patient} does not exist'}) 
            
    if request.method == 'GET': 
        patient_serializer = PatientSerializer(patient) 
        return JsonResponse(PatientSerializer.data) 
            
    elif request.method == 'PUT': 
        patient_data = JSONParser().parse(request) 
        patient_serializer = PatientSerializer(patient, data=patient_data) 
        if patient_serializer.is_valid(): 
            patient_serializer.save() 
            return JsonResponse(patient_serializer.data) 
        return JsonResponse(patient_serializer.errors)