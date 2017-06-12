# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=45)
    description = models.CharField(max_length=200)
    weight = models.CharField(max_length=20)
    price = models.CharField(max_length=20)
    cost = models.CharField(max_length=20)
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
