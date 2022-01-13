from django.urls import include, path

urlpatterns = [
    path('patient/', include('api.patients.urls')),
]