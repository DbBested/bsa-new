import os
import json
import logging
import numpy as np
from pprint import pprint
from qdrant_client import QdrantClient
from sentence_transformers import SentenceTransformer

def get_similar(query):
    top_related = []
    model = SentenceTransformer('paraphrase-MiniLM-L6-v2') 
    client = QdrantClient(host='localhost', port=6333)
    print('Query received:', query)
    embeddings = model.encode([query])
    vectors = embeddings.tolist()
    results = client.search(
        collection_name='arxiv',
        query_vector=vectors[0],
        limit=10)
    count = 0
    for result in results:
        if count <=6:
            top_related.append(result.payload)
            count+=1
    return top_related
