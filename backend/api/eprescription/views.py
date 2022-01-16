from curses import keyname
from rest_framework import viewsets
from .serializers import PrescriptionSerializer,MedicationSerializer,PatientSerializer
from .models import Prescription,Medication,Patient
from rest_framework import generics
from rest_framework import mixins 
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView


class PrescriptionList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = PrescriptionSerializer
    queryset = Prescription.objects.all()

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

# patient view prescription with  patient primary key GET request

@api_view(['GET'])
def viewprescriptionpatientlId(request, pk):
    try: 
        patient = Patient.objects.get(pk=pk) 
    except Patient.DoesNotExist: 
        return JsonResponse({'message': 'The Prescription does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        patient_serializer = PatientSerializer(patient) 
        return JsonResponse(patient_serializer.data) 




#doctor view prescription by patient primary key(GET)

@api_view(['POST'])
def prescription_detail_by_id(request, pk):
    try: 
        prescrition = Patient.objects.get(pk=pk) 
    except Patient.DoesNotExist: 
        return JsonResponse({'message': 'The prescription does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        prescription_serializer = PatientSerializer(medication) 
        return JsonResponse(prescription_serializer.data) 





class MedicationList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = MedicationSerializer
    queryset = Medication.objects.all()

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)
# class MedicationList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
#     serializer_class = MedicationSerializer
#     queryset = Medication.objects.all()

#     def get(self, request):
#         return self.list(request)

#     def post(self, request):
#         return self.create(request)


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



@api_view(['GET'])
def prescription_detail_by_id(request, pk):
    try: 
        prescrition = Prescription.objects.get(pk=pk) 
    except Prescription.DoesNotExist: 
        return JsonResponse({'message': 'The medication does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        medication_serializer = MedicationSerializer(medication) 
        return JsonResponse(medication_serializer.data)  





# Prescription (Rachna)
# Add new Prescription PostAPI (doctor)

# Add new medication PostAPI (doctor)

# View Prescription GetAPI (patient)

# View Prescription GetAPI (doctor)

# View Medication GetAPI (patient)

# View Medication GetAPI (doctor)


# Prescription (Rachna)
# Add new Prescription PostAPI (doctor)



# View Prescription GetAPI (patient)

# View Prescription GetAPI (doctor)

# View Medication GetAPI (patient)

# View Medication GetAPI (doctor)


# Add new medication PostAPI (doctor)



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








