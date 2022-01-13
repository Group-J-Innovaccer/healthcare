
from django.urls import include, path
from rest_framework import routers
from . import views
from .models import Patient

# router = routers.DefaultRouter()
# router.register(r'patient', views.PatientList,basename=Patient)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('patient/', views.PatientList.as_view()),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]