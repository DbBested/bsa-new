from main.jobs import schedule_api
from datetime import datetime
from apscheduler.schedulers.blocking import BlockingScheduler
from datetime import date


scheduler = BlockingScheduler()


@scheduler.scheduled_job('interval', minutes=3)
def timed_job():
    schedule_api()



scheduler.start()