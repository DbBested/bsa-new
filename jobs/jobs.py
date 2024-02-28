from django.conf import settings
import requests
import json
import random
import urllib
import urllib.request as libreq
from urllib.request import urlopen
from bs4 import BeautifulSoup
from views import titles, summaries
import sys


sys.path.insert(0, 'C:\Users\dbbes\OneDrive\Documents\GitHub\incubator_BSAT\Backend\did_django_schedule_jobs-main\main')

topics = {1: 'cs.AI', 2: 'cs.AR', 3: 'cs.CC', 4: 'cs.CE', 
          5:'cs.CG', 6:'cs.CL', 7:'cs.CR'}
def schedule_api():
	for i in range(1,7):
		for j in range(0,10):
			url = 'http://export.arxiv.org/api/query?search_query=all:term='+"\"" + topics[i]+ "\"" + '&start='+str(j)+'&max_results=1' + "&sortBy=submittedDate&sortOrder=descending"
			response = urlopen(url)
			html_doc = response.read()
			soup = BeautifulSoup(html_doc, 'html.parser')
			for x in soup.find_all('title'): 
				print("hi")
				#titles.append(x.string)
			for x in soup.find_all('summary'): 
				print("hi")
				#summaries.append(x.string)
				
