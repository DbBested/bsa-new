
from re import L
from unicodedata import category
from django.conf import settings
from main.summarization import sent_tokenize, _create_frequency_matrix, _create_tf_matrix, _create_documents_per_words, _create_idf_matrix, _create_tf_idf_matrix, _score_sentences, _find_average_score, _generate_summary
import arxiv
import os

# Now this script or any imported module can use any part of Django it needs.



workdir = "main/static/assets"
topics = {1: 'cs.AI', 2: 'cs.AR', 3: 'cs.CC', 4: 'cs.CE', 
          5:'cs.CG', 6:'cs.CL', 7:'cs.CR', 8:'cs.CV', 9:'cs.CY', 10:'cs.DB', 11:'cs.DC', 12:'cs.DL', 13:'cs.DM', 14:'cs.DS',
		   15:'cs.ET', 16:'cs.FL', 17:'cs.GL', 18:'cs.GR', 19:'cs.GT', 20:'cs.HC', 21:'cs.IR', 22:'cs.IT', 23:'cs.LG', 24:'cs.LO', 25:'cs.MA',
		   26: 'cs.MM', 27:'cs.MS', 28:'cs.NA', 29:'cs.NE', 30:'cs.NI', 31:'cs.OH', 32:'cs.OS', 33:'cs.PF', 34:'cs.PL', 35:'cs.RO', 36:'cs.SC',
		   37:'cs.SD', 38:'cs.SE', 39:'cs.SI', 40:'cs.SY', 41:'econ.EM', 42:'econ.GN', 43:'econ.TH', 44:'eess.AS', 45:'eess.IV', 46:'eess.SP',
		   47:'eess.SY', 48:'math.AC', 49:'math.AG', 50:'math.AP', 51:'math.AT', 52:'math.CA', 53:'math.CO', 54:'math.CT',
		   55:'math.CV', 56:'math.DG', 57:'math.DS', 58:'math.FA', 59:'math.GM', 60:'math.GN', 61:'math.GR', 62:'math.GT',
		   63:'math.HO', 64:'math.IT', 65:'math.KT', 66:'math.LO', 67:'math.MG', 68:'math.MP', 69:'math.NA', 70:'math.NT',
		   71:'math.OA', 72:'math.OC', 73:'math.PR', 74:'math.QA', 75:'math.RA', 76:'math.RT', 77:'math.SG', 78:'math.SP',
		   79:'math.ST', 80:'astro-ph.CO', 81:'astro-ph.EP', 82:'astro-ph.GA', 83:'astro-ph.HE', 84:'astro-ph.IM', 85:'astro-ph.SR',
		   86:'cond-mat.dis-nn', 87:'cond-mat.mes-hall', 88:'cond-mat.mtrl-sci', 89:'cond-mat.other', 90:'cond-mat.quant-gas', 91:'cond-mat.soft',
		   92:'cond-mat.stat-mech', 93:'cond-mat.str-el', 94:'cond-mat.supr-con', 95:'gr-qc', 96:'hep-ex', 97:'hep-lat', 98:'hep-ph',
		   99:'hep-th', 100:'math-ph', 101:'nlin.AO', 102:'nlin.CD', 103:'nlin.CG', 104:'nlin.PS', 105:'nlin.SI', 106:'nucl-ex', 107:'nucl-th',
		   108:'physics.acc-ph', 109:'physics.ao-ph', 110:'physics.app-ph', 111:'physics.atm-clus', 112:'physics.atom-ph', 113:'physics.bio-ph', 
		   114:'physics.chem-ph', 115:'physics.class-ph', 116:'physics.comp-ph', 117:'physics.data-an', 118:'physics.ed-ph', 119:'physics.flu-dyn', 
		   120:'physics.gen-ph', 121:'physics.geo-ph', 122:'physics.hist-ph', 123:'physics.ins-det', 124:'physics.med-ph', 125:'physics.optics', 
		   126:'physics.plasm-ph', 127:'physics.pop-ph', 128:'physics.soc-ph', 129:'physics.space-ph', 130:'quant-ph', 131:'q-bio.BM', 132:'q-bio.CB',
		   133:'q-bio.GN', 134:'q-bio.MN', 135:'q-bio.NC', 136:'q-bio.OT', 137:'q-bio.PE', 138:'q-bio.QM', 139:'q-bio.SC', 140:'q-bio.TO',
		   141:'q-fin.CP', 142:'q-fin.EC', 143:'q-fin.GN', 144:'q-fin.MF', 145:'q-fin.PM', 146:'q-fin.PR', 147:'q-fin.RM', 148:'q-fin.ST', 149:'q-fin.TR',
		   150:'stat.AP', 151:'stat.CO', 152:'stat.ME', 153:'stat.ML', 154:'stat.OT', 155:'stat.TH'
}
paperFromEachCat = 30
# def download_file(download_url):
#     response = urllib2.urlopen(download_url)
#     file = open("pdf/paper.pdf", 'wb')
#     file.write(response.read())
#     file.close()
# def extract_image():
# 	doc = fitz.Document("pdf/paper.pdf")
# 	gotImage = False
# 	for i in range(len(doc)):
# 		for img in doc.get_page_images(i):
# 			xref = img[0]
# 			image = doc.extract_image(xref)
# 			pix = fitz.Pixmap(doc, xref)
# 			if(pix != ''):
# 				pix = pix.tobytes()
# 				return pix
			
		



def schedule_api():
	import django 
	os.environ.setdefault("DJANGO_SETTINGS_MODULE", "did_django_schedule_jobs-main.settings")
	django.setup()
	from main.models import Papers
	print("running")
	for i in range(1,155):
		search = arxiv.Search(
				query=topics[i],
				max_results = paperFromEachCat,
				sort_by = arxiv.SortCriterion.SubmittedDate
		)
		j = 0
		for results in search.results():	
			titleE = results.title
			abstractE = results.summary
			linkE = results.entry_id
			authors = results.authors
			pdf = results.pdf_url
			categoryE = results.primary_category
			dateE = results.published
			#download the pdf
			#download_file(pdf)
			#imageE = extract_image()
			# print(abstract)
			# abstract = 'An accurate multiclass classification strategy is crucial to interpreting antibody tests. However, traditional methods based on confidence intervals or receiver operating characteristics lack clear extensions to settings with more than two classes. We address this problem by developing a multiclass classification based on probabilistic modeling and optimal decision theory that minimizes the convex combination of false classification rates. The classification process is challenging when the relative fraction of the population in each class, or generalized prevalence, is unknown. Thus, we also develop a method for estimating the generalized prevalence of test data that is independent of classification. We validate our approach on serological data with severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) naïve, previously infected, and vaccinated classes. Synthetic data are used to demonstrate that (i) prevalence estimates are unbiased and converge to true values and (ii) our procedure applies to arbitrary measurement dimensions. In contrast to the binary problem, the multiclass setting offers wide-reaching utility as the most general framework and provides new insight into prevalence estimation best practices.'
			sentences = sent_tokenize(abstractE)
			total_documents  = len(sentences)
			freq_matrix = _create_frequency_matrix(sentences)
			tf_matrix = _create_tf_matrix(freq_matrix)
			count_doc_per_words = _create_documents_per_words(freq_matrix)
			idf_matrix = _create_idf_matrix(freq_matrix, count_doc_per_words, total_documents)
			tf_idf_matrix = _create_tf_idf_matrix(tf_matrix, idf_matrix)
			sentence_scores = _score_sentences(tf_idf_matrix)
			threshold = _find_average_score(sentence_scores)
			summary= _generate_summary(sentences, sentence_scores, 1 * threshold)
			auth = ""
			for author in authors:	
				auth += str(author) + ", "
			auth = auth[:-2] + "."
			try:
				newPaper, created = Papers.objects.get_or_create(title = titleE, abstract = abstractE, link = linkE, authors = auth, tfidfsummary = summary, category = categoryE, date = dateE)
				if(created):
					newPaper.save()
			except:
				print("duplicate paper")
			# papers = Papers.objects.all().order_by('-id')
			# for n in range(0,5):
			# 	data = papers[n].image
			# 	if (data != ''):
			# 		img = Image.open(io.BytesIO(data))
			# 		file_path = workdir + "/" + str(n) + ".png"
			# 		img.save(file_path)

			j += 1

			
