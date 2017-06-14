from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^go_back$', views.go_back),
    url(r'^validate$', views.validate),
    url(r'^success$', views.success),
    url(r'^usernames/confirm/(?P<id>\d+)$', views.confirm),
    url(r'^usernames/destroy/(?P<id>\d+)$', views.destroy),
]
