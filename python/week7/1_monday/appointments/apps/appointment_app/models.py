# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import messages


class AppointmentManager(models.Manager):
    def checkAppt(self, postData):
        date = postData['date']
        time = postData['time']
        date_check = Appointment.objects.filter(date=date).filter(time=time)
        validAppt = True
        if date_check:
            messages.error(request, 'An appointment is already scheduled at that time.')
            validAppt = False
        else:
            Appointment.objects.create(date=date, time=time)
        return validAppt


class Appointment(models.Model):
    date = models.DateField(auto_now=False)
    time = models.CharField(max_length=32)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AppointmentManager()
