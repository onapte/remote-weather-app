from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    isOnline = models.BooleanField(default=False)
    ip = models.CharField(blank=True, null=True, max_length=200)
    pass

class weatherData(models.Model):
    city = models.CharField(max_length=120)
    stationCode = models.CharField(max_length=50, null=True)
    reportTime = models.CharField(max_length=100, null=True)
    temperature = models.CharField(max_length=20, null=True)
    dewPoint = models.CharField(max_length=20, null=True)
    windSpeed = models.CharField(max_length=20, null=True)
    visibility = models.CharField(max_length=20, null=True)
    pressure = models.CharField(max_length=20, null=True)
    weather = models.CharField(max_length=20, null=True)
    sky = models.CharField(max_length=20, null=True)

    class Meta:
        ordering = ("city",)

class Visitor(models.Model):
    ip = models.CharField(max_length=200)
    isRegistered = models.BooleanField()

class cityWeatherRequest(models.Model):
    city = models.CharField(max_length=50)
    userIP = models.CharField(max_length=100)