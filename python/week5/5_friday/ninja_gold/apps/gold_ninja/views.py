# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import random
import datetime

from django.shortcuts import render, redirect

def index(request):
    if 'gold' in request.session:
        return render(request, "index.html")
    else:
        request.session['gold'] = 0
        request.session['log'] = ''
        status = {
        'gold': request.session['gold'],
        'log': request.session['log']
        }
        return render(request, 'index.html', status)

def process_farm(request):
    if request.method == "POST":
        gold = int(random.randrange(10,21))
        request.session['gold'] += gold
        request.session['log'] += 'You earned ' + str(gold) + ' gold from the farm on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S%p}'.format(datetime.datetime.now())) + '.<br>'
        return redirect('/')

def process_cave(request):
    if request.method == "POST":
        gold = int(random.randrange(5,11))
        request.session['gold'] += gold
        request.session['log'] += 'You earned ' + str(gold) + ' gold from the cave on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S%p}'.format(datetime.datetime.now())) + '.<br>'
        return redirect('/')

def process_house(request):
    if request.method == "POST":
        gold = int(random.randrange(2,6))
        request.session['gold'] += gold
        request.session['log'] += 'You earned ' + str(gold) + ' gold from the house on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S%p}'.format(datetime.datetime.now())) + '.<br>'
        return redirect('/')

def process_casino(request):
    if request.method == "POST":
        gold = int(random.randrange(-50,51))
        request.session['gold'] += gold
        if gold >= 0:
            request.session['log'] += 'You earned ' + str(gold) + ' gold from the casino on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S%p}'.format(datetime.datetime.now())) + '. Nice!<br>'
        else:
            gold = abs(gold)
            request.session['log'] += 'You lost ' + str(gold) + ' gold from the casino on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S%p}'.format(datetime.datetime.now())) + '. Sorry!<br>'
        return redirect('/')

def reset(request):
    if ('gold' and 'log') in request.session:
        request.session.clear()
        return redirect('/')
