from django.shortcuts import render, redirect
from time import strftime

def index(request):
    date_time = {
        'current_date': strftime("%A, %B %d, %Y"),
        'current_time': strftime("%I:%M:%S %p")
        }
    return render(request, 'time_display/index.html', date_time)
