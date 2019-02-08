from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^api/decimaApp', views.DecimaView.as_view() ),
]
