from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

from model_predict import predict_from_convo
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


class Text(BaseModel):
    text: str


@app.post("/mirror")
async def mirror_string(text: Text):
    return text

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
