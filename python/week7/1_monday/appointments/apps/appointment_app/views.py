# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import Appointment

def index(request):
    return render(request, "index.html")

def makeappt(request):
    if Appointment.objects.checkAppt(request.POST):
        validAppt = True
        return redirect('/success')
    else:
        return redirect('/')

def success(request):
    context = {
    'appts': Appointment.objects.all().order_by('-created_at')[:1]
    }
    return render(request, "success.html", context)
