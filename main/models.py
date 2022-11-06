from django.db import models

class Papers(models.Model):
    title = models.TextField(default="", unique = True)
    abstract = models.TextField(default="")
    link = models.URLField(max_length=200, default="")
    image = models.BinaryField(default=b'')  # save photo as binary object
    authors = models.TextField(default="")
    tfidfsummary = models.TextField(default="")
    category = models.CharField(default="", max_length = 200)
    date = models.CharField(default="", max_length = 200)