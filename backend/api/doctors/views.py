from rest_framework import viewsets
from .serializers import DoctorSerializer
from .models import Doctor
from rest_framework import generics
from rest_framework import mixins 

class DoctorList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

