from curses import keyname
from rest_framework import viewsets
from .serializers import PrescriptionSerializer,MedicationSerializer
from .models import Prescription,Medication
from rest_framework import generics
from rest_framework import mixins 


class PrescriptionList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = PrescriptionSerializer
    queryset = Prescription.objects.all()

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

# Prescription (Rachna)
# Add new Prescription PostAPI (doctor)



# View Prescription GetAPI (patient)

# View Prescription GetAPI (doctor)

# View Medication GetAPI (patient)

# View Medication GetAPI (doctor)


# Add new medication PostAPI (doctor)

from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
# from tutorials.models import Tutorial
# from tutorials.serializers import TutorialSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])  #api view for doctor both get and post
def medication_list(request):
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
    
   
 
 # Medication view with primary key for doctors (GET)
@api_view(['GET'])
def medication_detail(request, pk):
    try: 
        medication = Medication.objects.get(pk=pk) 
    except Medication.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        medication_serializer = MedicationSerializer(medication) 
        return JsonResponse(medication_serializer.data) 
 
    # elif request.method == 'PUT': 
    #     tutorial_data = JSONParser().parse(request) 
    #     tutorial_serializer = TutorialSerializer(tutorial, data=tutorial_data) 
    #     if tutorial_serializer.is_valid(): 
    #         tutorial_serializer.save() 
    #         return JsonResponse(tutorial_serializer.data) 
    #     return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    # elif request.method == 'DELETE': 
    #     tutorial.delete() 
    #     return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
        
# @api_view(['GET'])
# def medications_list_published(request):
#     tutorials = Medication.objects.filter(published=True)
        
#     if request.method == 'GET': 
#         tutorials_serializer = MedicationSerializer(tutorials, many=True)
#         return JsonResponse(tutorials_serializer.data, safe=False)