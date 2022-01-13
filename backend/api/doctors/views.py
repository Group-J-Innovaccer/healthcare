from rest_framework import viewsets
from .serializers import DoctorSerializer
from .models import Doctor
from rest_framework import generics
from rest_framework import mixins 
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated



class DoctorList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()
    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)
 