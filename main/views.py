from operator import length_hint
from re import L
from django.shortcuts import render
from django.conf import settings
from django.template import loader
import os
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from main.related import get_similar
from main.summarization import summarize_function
paper_count = 7

titles = [""] * paper_count
abstracts = [""] * paper_count
tfidf_summaries = [""] * paper_count
links = [""] * paper_count
authors = [""] * paper_count
dates = [""] * paper_count


rtitles = [""] * paper_count
rabstracts = [""] * paper_count
rtfidf_summaries = [""] * paper_count
rlinks = [""] * paper_count
rauthors = [""] * paper_count
rdates = [""] * paper_count



'''
Basic view for displaying our scheduled job
'''
# for i in range(1, paper_count):
# 	f = open("papers/title" + str(i) + ".txt", "r")
# 	titles[i] = (f.read())	
# for i in range(1, paper_count):
# 	f = open("papers/abstract" + str(i) + ".txt", "r")
# 	abstracts[i] = (f.read())	
# for i in range(1, paper_count):
# 	f = open("papers/summary" + str(i) + ".txt", "r")
# 	tfidf_summaries[i] = (f.read())	
# for i in range(1, paper_count):
# 	f = open("papers/link" + str(i) + ".txt", "r")
# 	links[i] = (f.read())	
# for i in range(1, paper_count):
# 	f = open("papers/authors" + str(i) + ".txt", "r", encoding="utf-8")
# 	authors[i] = (f.read())	



def index(request):
	import django 
	os.environ.setdefault("DJANGO_SETTINGS_MODULE", "did_django_schedule_jobs-main.settings")
	django.setup()
	from main.models import Papers
	category = ""
	if(request.GET.get('category', '') != ''):
		print(request.GET.get('category', ''))
		category = request.GET.get('category', '')
		papers = Papers.objects.filter(category = request.GET.get('category', ''))
	else:
		papers = Papers.objects.all()
		
	papers = papers.order_by('-id')
	print(papers[0].id)
	for i in range(0, len(papers)):
		papers[i].date = papers[i].date[0:10]
	finalPapers = []
	array1 =[]
	array2 = []
	alternate = 0
	for i in papers:
		if(alternate%2 == 0):
			array1.append(i)
		else:
			array2.append(i)
		alternate += 1
	for i in range(0,len(array1) - 1):
		finalPapers.append([array1[i], array2[i]])
	finalPapers = finalPapers[5:]
	for i in range(1, paper_count):
		titles[i] = papers[i].title
	for i in range(1, paper_count):
		abstracts[i] = papers[i].abstract
	for i in range(1, paper_count):
		links[i] = papers[i].link
	for i in range(1, paper_count):
		authors[i] = papers[i].authors
	for i in range(1, paper_count):
		tfidf_summaries[i] = papers[i].tfidfsummary
	for i in range(1, paper_count):
		dates[i] = papers[i].date
	template = 'index.html'



	context = {
		"title1" : titles[1],
		"abstracts1" : abstracts[1],
		"prompt_summary1" : tfidf_summaries[1],
		"links1" : links[1],
		"authors1" : authors[1],
		"dates1" : dates[1],
		"title2" : titles[2],
		"abstracts2" : abstracts[2],
		"prompt_summary2" : tfidf_summaries[2],
		"links2" : links[2],
		"authors2" : authors[2],
		"dates2" : dates[2],
		"title3" : titles[3],
		"abstracts3" : abstracts[3],
		"prompt_summary3" : tfidf_summaries[3],
		"links3" : links[3],
		"authors3" : authors[3],
		"dates3" : dates[3],
		"title4" : titles[4],
		"abstracts4" : abstracts[4],
		"prompt_summary4" : tfidf_summaries[4],
		"links4" : links[4],
		"authors4" : authors[4],
		"dates4" : dates[4],
		"title5" : titles[5],
		"abstracts5" : abstracts[5],
		"prompt_summary5" : tfidf_summaries[5],
		"links5" : links[5],
		"authors5" : authors[5],
		"dates5" : dates[5],
		"abstracts6" : abstracts[6],
		"prompt_summary6" : tfidf_summaries[6],
		"links6" : links[6],
		"authors6" : authors[6],
		"dates6" : dates[6]
	} 



	page = request.GET.get('page', 1)
	paginator = Paginator(finalPapers, 5)
	try:
		paperPag = paginator.page(page)
	except PageNotAnInteger:
		paperPag = paginator.page(1)
	except EmptyPage:
		paperPag = paginator.page(paginator.num_pages)


	context = {**context, 'Papers':paperPag}


	return render(request, template, context)
def about(request):
	template = template = 'about.html'
	context = {}
	return render(request, template, context)


def search(request):
	from main.models import Papers
	template = "search.html"
	query = request.POST.get('query', None)
	if query:
		related_dict = get_similar(query)
	p_count=0
	for paper in related_dict:
		rtitles[p_count] = paper['title']
		rabstracts[p_count] = paper['abstract']
		rlinks[p_count] = 'https://arxiv.org/pdf/' + str(paper['id'])
		rtfidf_summaries[p_count] = summarize_function(paper['abstract'])
		# rauthors[p_count] = Papers.objects.get(title=paper['title']).authors
		p_count+=1
	context = {
		"title1" : rtitles[0],
		"abstracts1" : rabstracts[0],
		"prompt_summary1" : rtfidf_summaries[0],
		"links1" : rlinks[0],
		"authors1" : rauthors[0],
		"dates1" : rdates[0],
		"title2" : rtitles[1],
		"abstracts2" : rabstracts[1],
		"prompt_summary2" : rtfidf_summaries[1],
		"links2" : rlinks[1],
		"authors2" : rauthors[1],
		"dates2" : rdates[1],
		"title3" : rtitles[2],
		"abstracts3" : rabstracts[2],
		"prompt_summary3" : rtfidf_summaries[2],
		"links3" : rlinks[2],
		"authors3" : rauthors[2],
		"dates3" : rdates[2],
		"title4" : rtitles[3],
		"abstracts4" : rabstracts[3],
		"prompt_summary4" : rtfidf_summaries[3],
		"links4" : rlinks[3],
		"authors4" : rauthors[3],
		"dates4" : rdates[3],
		"title5" : rtitles[4],
		"abstracts5" : rabstracts[4],
		"prompt_summary5" : rtfidf_summaries[4],
		"links5" : rlinks[4],
		"authors5" : rauthors[4],
		"dates5" : rdates[4],
		"title6" : rtitles[5],
		"abstracts6" : rabstracts[5],
		"prompt_summary6" : rtfidf_summaries[5],
		"links6" : rlinks[5],
		"authors6" : rauthors[5],
		"dates6" : rdates[5],
	}
	context['query']=query
	return render(request, template, context)
