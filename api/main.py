from fastapi import FastAPI, File, UploadFile, Response
import uvicorn
from PIL import Image
from io import BytesIO
import numpy as np

app = FastAPI()

@app.get('/ping')
async def ping():
    return "I'm working keep go on!!" # just to make sure our server is running

def read_file_as_image(data) -> np.ndarray:
     image = BytesIO(data)
     image = np.array(Image.open(image))
     return image

@app.post("/predict")
async def predict(
    #  file in variablename, UploadFile is datatype, and File class is default value
     file: UploadFile = File(...)
):
     image = read_file_as_image (await file.read())
     return image
     

if __name__ == "__main__":
      uvicorn.run(app, port=5000, host="localhost")