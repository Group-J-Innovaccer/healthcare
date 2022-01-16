from .models import Prescription,Medication,Patient
from rest_framework import serializers

class PrescriptionSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = Prescription
        fields = '__all__'

class MedicationSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = Medication
        fields = '__all__'

class PatientSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = Patient
        fields="__all__"