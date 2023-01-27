from .models import Contact
from rest_framework import viewsets
from .serializers import ContactSerializer
from rest_framework import filters

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by('created_at')
    serializer_class = ContactSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
    ]
