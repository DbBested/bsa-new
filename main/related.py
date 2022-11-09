from django.db import models
from django.contrib.postgres.search import SearchVector
def get_similar(query, Papers):
    fields = [f for f in Papers._meta.get_fields() if (isinstance(f, models.CharField) or isinstance(f,models.TextField))]
    print(Papers.objects.filter(abstract__search=query))
    return Papers.objects.filter(abstract__search=query)
