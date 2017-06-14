# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Username

def index(request):
    return render(request, "user_val/index.html")

def validate(request):
    get_user = request.POST['username']
    username_len = len(get_user)
    if username_len < 8 or username_len > 26:
        messages.add_message(request, messages.INFO, 'Username is not valid! Must be between 8-26 characters.')
        return redirect('/')
    else:
        Username.objects.create(username=get_user)
        messages.add_message(request, messages.INFO, 'The username you entered is valid. Thank you!')
        return redirect('/success')


def success(request):
    context = {
        "usernames": Username.objects.all()
    }
    return render(request, "user_val/success.html", context)

def confirm(request, id):
    context = {
        "usernames": Username.objects.filter(id=id)
    }
    return render(request, "user_val/confirm.html", context)

def destroy(request, id):
    Username.objects.filter(id=id).delete()
    messages.add_message(request, messages.INFO, 'User successfully deleted.')
    return redirect('/')

def go_back(request):
    return redirect('/')
