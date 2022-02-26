from django.contrib import admin
from .models import cityWeatherRequest, weatherData, User, Visitor

# Register your models here.
@admin.register(weatherData)
class weatherDataAdmin(admin.ModelAdmin):
    list_display = ("city", "visibility", "temperature", "weather")
    
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username",)

@admin.register(Visitor)
class VisitorAdmin(admin.ModelAdmin):
    list_display = ("ip", "isRegistered",)