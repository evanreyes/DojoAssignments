# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    return render(request, "index.html")

def process(request):
    if request.method == "POST":
        request.session['name'] = request.POST['name']
        request.session['loc'] = request.POST['loc']
        request.session['lang'] = request.POST['lang']
        request.session['com'] = request.POST['com']
        return redirect("/result")
    else:
        return redirect('/')

def result(request):
    return render(request, "success.html")
