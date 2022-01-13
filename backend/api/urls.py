from django.urls import include, path

<<<<<<< HEAD

urlpatterns = [
    path('doctors/', include('api.doctors.urls')),

]

=======
urlpatterns = [
    path('eprescription/', include('api.eprescription.urls')),
]
>>>>>>> eprescription-model
