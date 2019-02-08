from rest_framework import serializers
from decimaApp.models import Decima

class DecimaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Decima
        fields = ('id', 'name', 'email', 'message')
