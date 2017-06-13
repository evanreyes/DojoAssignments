# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Book

def index(request):
    book1 = Book.objects.create(title="The Hobbit", author="J.R.R. Tolkien", date_published="1939", category="Fantasy", in_print = True)
    book2 = Book.objects.create(title="Taipei", author="Tao Lin", date_published="2009", category="Fiction", in_print = True)
    book3 = Book.objects.create(title="Ten Little Indians", author="Sherman Alexie", date_published="2004", category="Short Stories", in_print = True)
    book4 = Book.objects.create(title="The Road", author="Cormac McCarthy", date_published="2006", category="Fiction", in_print = True)
    book5 = Book.objects.create(title="Zinn and the Art of Road Bike Maintenance", author="Lennard Zinn", date_published="2003", category="Non-Fiction", in_print = True)
    books = Book.objects.all()
    for book in books:
        print book.title, book.author, book.date_published, book.category, book.in_print
    return render(request, 'book_app/index.html')
