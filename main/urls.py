from operator import index
from django.urls import path
from . import views

#33389
app_name = "main"

urlpatterns = [
	
	path('', views.index, name="index"),
	path(r'^$', views.index, name='index'),
	path('about', views.about, name="about"),
	path('index', views.index, name="index"),
	path('search', views.search, name = 'event')
 ]