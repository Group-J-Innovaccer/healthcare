from django.urls import include, path

urlpatterns = [
    path('eprescription/', include('api.eprescription.urls')),
]