# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    return render(request, 'ninja_turtles/index.html')

def ninjas(request, color):
    context = {
        'tmnt': '/ninja_turtles/img/tmnt.png',
		'leonardo': '/ninja_turtles/img/leonardo.jpg',
		'donatello': '/ninja_turtles/img/donatello.jpg',
		'raphael': '/ninja_turtles/img/raphael.jpg',
		'michelangelo': '/ninja_turtles/img/michelangelo.jpg',
		'april': '/ninja_turtles/img/april.jpg'
	}

    if color == '':
        context['all'] = True
    elif color == 'blue':
        context['color'] = 'blue'
    elif color == 'purple':
    	context['color'] = 'purple'
    elif color == 'red':
    	context['color'] = 'red'
    elif color == 'orange':
    	context['color'] = 'orange'

    return render(request, 'ninja_turtles/tmnt.html', context)
