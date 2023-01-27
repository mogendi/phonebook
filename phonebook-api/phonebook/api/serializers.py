from .models import Contact
from rest_framework import serializers

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'id',
            'created_at',
            'first_name',
            'last_name',
            'email',
            'phone',
            'address',
            'image_url'
        ]
