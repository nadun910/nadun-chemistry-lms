from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView  # Better than HttpResponse
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/login/', TokenObtainPairView.as_view(), name='login'),
    path('', TemplateView.as_view(template_name='index.html')),  # For React
]