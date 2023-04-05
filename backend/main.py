from typing import Union, List
from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
import uvicorn

from model_predict import predict_from_convo, brute_predictor
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


class Convo(BaseModel):
    conversation: str


@app.post("/predict")
async def predict_convo(convo: Convo):
    # potentially load model here
    conversation = convo.dict()["conversation"]
    pred = predict_from_convo(conversation)
    return {"pred": pred}


@app.post("/api/upload")
async def upload_files(files: List[UploadFile] = File(...)):
    # handle the file upload here
    file_contents = []
    for file in files:
        # file_names.append(file.filename)
        contents = await file.read()
        # pred = predict_from_xml(contents)
        pred = brute_predictor(contents)
        file_contents.append(
            {"name": file.filename, "contents": pred})
        # file_contents.append(
        #     {"name": file.filename, "contents": contents.decode()})
    return {"files": file_contents}


class Text(BaseModel):
    text: str


@app.post("/mirror")
async def mirror_string(text: Text):
    return text

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
