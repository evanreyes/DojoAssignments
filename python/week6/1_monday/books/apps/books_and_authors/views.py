# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Book, Author

def index(request):
    author1 = Author.objects.create(name="J.R.R. Tolkien")
    author2 = Author.objects.create(name="Tao Lin")
    author3 = Author.objects.create(name="Sherman Alexie")
    author4 = Author.objects.create(name="Cormac McCarthy")
    author5 = Author.objects.create(name="Lennard Zinn")
    book1 = Book.objects.create(title="The Hobbit", date_published="1939", category="Fantasy", in_print = True, author_id=author1)
    book2 = Book.objects.create(title="The Silmarillion", date_published="1944", category="Fantasy", in_print = True, author_id=author1)
    book3 = Book.objects.create(title="Blood Meridian", date_published="1999", category="Fiction", in_print = True, author_id=author4)
    book4 = Book.objects.create(title="The Road", date_published="2006", category="Fiction", in_print = True, author_id=author4)
    book5 = Book.objects.create(title="All the Pretty Horses", date_published="2003", category="Fiction", in_print = True, author_id=author4)
    book_list = Book.objects.all()
    for book in book_list:
        print book.title, book.author_id, book.date_published, book.category, book.in_print
    return render(request, "books_and_authors/index.html")
