from django.db import models

class Contact(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True, null=True)
    image_url = models.URLField(default="https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png")

