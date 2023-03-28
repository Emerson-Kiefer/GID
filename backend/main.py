from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

from model_predict import predict_from_convo

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


class Convo(BaseModel):
    conversation: str


@app.post("/predict/")
async def predict_convo(convo: Convo):
    conversation = convo.dict()["conversation"]
    pred = predict_from_convo(conversation)
    return {"pred": pred}
