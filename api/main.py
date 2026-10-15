from fastapi import FastAPI, File, UploadFile, Response
import uvicorn
from PIL import Image
from io import BytesIO
import numpy as np
import tensorflow as tf

app = FastAPI()

MODEL = tf.keras.models.load_model("../models/1.keras")
CLASS_NAMES = ["Earily Bright", "Late Bright", "Healthy"]  
@app.get('/ping')
async def ping():
    return "I'm working keep go on!!" # just to make sure our server is running

# read file from disk and convert it into np array
def read_file_as_image(data) -> np.ndarray:
     image = Image.open(BytesIO(data))
     image = np.array(image)
     return image

@app.post("/predict")
async def predict(
    #  file in variablename, UploadFile is datatype, and File class is default value
     file: UploadFile = File(...)
):
     image = read_file_as_image (await file.read())
     MODEL.predict(image)
     

if __name__ == "__main__":
      uvicorn.run(app, port=5000, host="localhost")