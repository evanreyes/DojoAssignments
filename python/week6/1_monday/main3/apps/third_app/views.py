# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import People

from django.shortcuts import render

def index(request):
    People.objects.create(first_name="Kevin", last_name="Rays")
    people = People.objects.all()
    print people
    return render(request, "third_app/index.html")
