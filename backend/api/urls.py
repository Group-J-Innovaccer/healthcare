from django.urls import include, path


urlpatterns = [
    path('doctors/', include('api.doctors.urls')),

]

