# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages

def index(request):
    return render(request, 'landscape_app/index.html')

def landscape(request, id):
    num = int(id)

    if num > 50:
        messages.add_message(request, messages.INFO, "Please enter a number between 1 and 50!")
    	return redirect('/')
    else:
        context = {
            'snow': '/landscape_app/img/snow.jpg',
    		'desert': '/landscape_app/img/desert.jpg',
    		'forest': '/landscape_app/img/forest.jpg',
    		'vineyard': '/landscape_app/img/vineyard.jpg',
    		'tropical': '/landscape_app/img/tropical.jpg'
    	}

        if num <= 10:
            context['id'] = 'snow'
        elif num <= 20:
        	context['id'] = 'desert'
        elif num <= 30:
        	context['id'] = 'forest'
        elif num <= 40:
        	context['id'] = 'vineyard'
        elif num <= 50:
        	context['id'] = 'tropical'
        return render(request, 'landscape_app/landscapes.html', context)
