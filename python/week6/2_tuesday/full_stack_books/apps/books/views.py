# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Book

def index(request):
    context = {
        "books": Book.objects.all()
    }
    return render(request, "books/index.html", context)

def add_book(request):
    Book.objects.create(title=request.POST['title'], author=request.POST['author'], genre=request.POST['genre'])
    return redirect('/')
