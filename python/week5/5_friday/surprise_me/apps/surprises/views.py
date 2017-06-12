# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
import random

values = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

def index(request):
    return render(request, "surprises/index.html")

def surprise(request):
    if request.method == "POST":
        num = int(request.POST['number'])
        random.shuffle(values)
        context = {
            'shuffled': []
        }
        print num
        print len(values)
        if num > len(values):
            return redirect('/')
        else:
            for number in range(0, num):
                context['shuffled'].append(values[number])
        return render(request, "surprises/surprise.html", context)
