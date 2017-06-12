# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Product

def index(request):
    Product.objects.create(name="Mango", description="A juicy fruit", weight="0.25lb", price="$1.25", cost="$0.45", category="Fruit")
    Product.objects.create(name="Pasta", description="The Italian delight", weight="1.0lb", price="$2.49", cost="$0.79", category="Pasta")
    Product.objects.create(name="Pirate's Booty", description="Crunchy and cheesy", weight="0.75lb", price="$3.99", cost="$1.25", category="Snacks")
    products = Product.objects.all()
    print products
    return render(request, 'product_app/index.html')
