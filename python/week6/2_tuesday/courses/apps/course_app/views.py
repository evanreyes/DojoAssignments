# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Course

def index(request):
    context = {
        "courses": Course.objects.all()
    }
    return render(request, "course_app/index.html", context)

def add_course(request):
    Course.objects.create(name=request.POST['name'], description=request.POST['description'])
    return redirect('/')

def destroy(request, id):
    Course.objects.filter(id=id).delete()
    messages.add_message(request, messages.INFO, 'Course successfully deleted.')
    return redirect('/')

def confirm(request, id):
    context = {
        "courses": Course.objects.filter(id=id)
    }
    return render(request, "course_app/confirm.html", context)
