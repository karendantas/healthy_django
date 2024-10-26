from django.urls import path
from . import views

urlpatterns = [
  path('', views.Index, name= 'index'),
  path('imc', views.Imc, name='imc')
]

