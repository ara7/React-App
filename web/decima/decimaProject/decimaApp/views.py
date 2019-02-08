from decimaApp.models import Decima
from decimaApp.serializers import DecimaSerializer
from rest_framework import generics

class DecimaView(generics.ListCreateAPIView):
    queryset = Decima.objects.all()
    serializer_class = DecimaSerializer
