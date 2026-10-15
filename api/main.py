from fastapi import FastAPI, File, UploadFile
import uvicorn

app = FastAPI()

@app.get('/ping')
async def ping():
    return "I'm working keep go on!!" # just to make sure our server is running


@app.post("/predict")
async def predict(
     file: UploadFile = File(...)
)
if __name__ == "__main__":
      uvicorn.run(app, port=5000, host="localhost")