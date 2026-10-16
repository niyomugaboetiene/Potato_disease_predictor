from fastapi import FastAPI, File, UploadFile, Response
import uvicorn
from PIL import Image
from io import BytesIO
import numpy as np
import tensorflow as tf
import os

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "1.keras")
MODEL = tf.keras.models.load_model(MODEL_PATH)
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
     image_batch = np.expand_dims(image, axis=0) # add image to batches
     prediction = MODEL.predict(image_batch)
     predicted_class = CLASS_NAME[]
     # return prediction.tolist()
     

if __name__ == "__main__":
      uvicorn.run(app, port=5000, host="localhost")