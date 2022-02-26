from .models import Visitor
from urllib import request

def add_variable_to_context(request):
    return {
        'unique_visits': Visitor.objects.all().count(),
    }