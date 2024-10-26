from django.shortcuts import render

# Create your views here.
def Index (request):
    return render(request, 'health/index.html');

def Imc (request):
    return render(request, 'health/imc.html');