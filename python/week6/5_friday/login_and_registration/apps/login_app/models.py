# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import messages
import re, bcrypt

email_reg = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

class UserManager(models.Manager):
    def checkReg(self, postData, request):
        first_name = postData['first_name']
        last_name = postData['last_name']
        email = postData['email']
        pw = postData['pw']
        pwc = postData['pw_confirm']
        validReg = True
        if len(first_name) < 2 or len(last_name) < 2:
            messages.warning(request, 'First and last name must be at least two characters long.')
            validReg = False
        if not email_reg.match(postData['email']):
            messages.warning(request, 'Please enter a valid email address.')
            validReg = False
        if len(pw) < 8:
            messages.warning(request, 'Password must be at least 6 characters.')
            validReg = False
        if pw != pwc:
            messages.warning(request, 'Passwords do not match.')
            validReg = False
        if UserAccount.objects.filter(email=email):
			messages.error(request, 'A user with that email address already exists.')
			validReg = False

        if validReg == True:
            messages.success(request, "Thank you! " + first_name + " was successfully registered.")
            pw_hash = bcrypt.hashpw(pw.encode(), bcrypt.gensalt())
            UserAccount.objects.create(first_name=first_name, last_name=last_name, email=email, password=pw_hash)
        return validReg

    def checkLog(self, postData, request):
        email = postData['email_login']
        pw = postData['password_login']
        validLog = True

        if len(email) < 1 or len(pw) < 1:
            messages.warning(request, 'Username or password is incorrect.')
            validLog = False

        elif UserAccount.objects.filter(email=email):
            db_pw = UserAccount.objects.get(email=email).password.encode()
            pw_hash = pw.encode()
            if bcrypt.hashpw(pw_hash, db_pw) == db_pw:
                messages.success(request, "Thank you! " + UserAccount.objects.get(email=email).first_name + " has successfully logged in.")
                validLog = True
            else:
                messages.warning(request, 'Username or password is incorrect.')
                validLog = False
        else:
            messages.warning(request, 'Username or password is incorrect.')
            validLog = False
        return validLog

class UserAccount(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    def __str__(self):
		return self.id, self.firstName, self.lastName, self.email
