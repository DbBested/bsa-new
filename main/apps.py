from django.apps import AppConfig
from main import updater


class MainConfig(AppConfig):
    name = 'main'

    def reay(self):
        updater.start()
