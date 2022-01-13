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

# Prescription (Rachna)
# Add new Prescription PostAPI (doctor)

# Add new medication PostAPI (doctor)

# View Prescription GetAPI (patient)

# View Prescription GetAPI (doctor)

# View Medication GetAPI (patient)

# View Medication GetAPI (doctor)