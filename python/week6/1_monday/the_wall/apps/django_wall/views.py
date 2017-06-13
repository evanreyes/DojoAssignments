# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,redirect
from .models import Users, Messages, Comments

def index(request):
    return render(request, "django_wall/index.html")
