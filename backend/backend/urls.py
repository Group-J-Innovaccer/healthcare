from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('api/', include('api.urls')),
=======
    path('', index, name='index'),
    path('api/', include('api.urls'))
>>>>>>> eprescription-model
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]