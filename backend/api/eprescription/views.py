from curses import keyname
from rest_framework import viewsets
from .serializers import PrescriptionSerializer,MedicationSerializer
from .models import Prescription,Medication
from rest_framework import generics
from rest_framework import mixins 
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status,permissions
from rest_framework.views import APIView
from .models import Prescription,Medication
from .serializers import PrescriptionSerializer,MedicationSerializer
from rest_framework.response import Response
 
from rest_framework.decorators import api_view

class PrescriptionList(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data=self.request.data
        patientId=data['id']
        prescription = Prescription.objects.filter(patient_id=patientId)
        serializer = PrescriptionSerializer(prescription, many=True)
        return Response(serializer.data)

class MedicationList(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data=self.request.data
        prescription_id=data['prescription_id']
        medication = Medication.objects.filter(prescription_id=prescription_id)
        serializer = MedicationSerializer(medication, many=True)
        return Response(serializer.data)

class PrescriptionCreate(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = PrescriptionSerializer
    queryset = Prescription.objects.all()

    def post(self, request):
        return self.create(request)

class MedicationCreate(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = MedicationSerializer
    queryset = Medication.objects.all()

    def post(self, request):
        return self.create(request)



class PatientPrescriptionList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):

    serializer_class = PrescriptionSerializer
    queryset = Prescription.objects.all()

    def get(self, request):
        return self.list(request)





@api_view(['GET', 'POST'])  #api view for doctor both get and post
def doctor_medication_list(request):
    if request.method == 'GET':
        medication = Medication.objects.all()
        
        title = request.query_params.get('medication_item', None)
        if title is not None:
            # tutorials = tutorials.filter(title__icontains=title)
            medication = medication.filter(titletitle__icontains = title)
        
        medication_serializer = MedicationSerializer(medication, many=True)
        return JsonResponse(medication_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        med_data = JSONParser().parse(request)
        medication_serializer = MedicationSerializer(data=med_data)
        if  medication_serializer.is_valid():
            medication_serializer.save()
            return JsonResponse(medication_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(medication_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
   
@api_view(['GET'])  #api view for doctor both get and post
def patient_medication_list(request):
    if request.method == 'GET':
        medication = Medication.objects.all()
        
        title = request.query_params.get('medication_item', None)
        if title is not None:
            # tutorials = tutorials.filter(title__icontains=title)
            medication = medication.filter(titletitle__icontains = title)
        
        medication_serializer = MedicationSerializer(medication, many=True)
        return JsonResponse(medication_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 


# Medication view with primary key for doctors (GET)
@api_view(['GET'])
def medication_detail_by_id(request, pk):
    try: 
        medication = Medication.objects.get(pk=pk) 
    except Medication.DoesNotExist: 
        return JsonResponse({'message': 'The medication does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        medication_serializer = MedicationSerializer(medication) 
        return JsonResponse(medication_serializer.data) 


