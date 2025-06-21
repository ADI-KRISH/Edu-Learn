import os
from typing import List , Dict , Optional
from fastapi import FastAPI,UploadFile,File,HTTPException
from google.cloud import documentai
from pydantic import BaseModel
import  google.cloud.document_v1 as documentAI
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import VertexAIEmbeddings
from langchain.vectorstores import chroma
from langchain.chains import retrieval_qa
from langchain.llms import vertexai
import vertexai
from elevenlabs  import generate,play
import moviepy.editor as mpe
import tempfile
import shutil
