from . models import Doctor
from rest_framework import serializers


class DoctorSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = Doctor
        fields = ('firstname', 'lastname', 'id', 'qualification', 'phone_no')

