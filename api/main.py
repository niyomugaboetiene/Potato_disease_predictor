from fastapi import FastAPI, File, UploadFile, Response
import uvicorn

app = FastAPI()

@app.get('/ping')
async def ping():
    return "I'm working keep go on!!" # just to make sure our server is running


@app.post("/predict")
async def predict(
    #  file in variablename, UploadFile is datatype, and File class is default value
     file: UploadFile = File(...)
):
     bytes = await file.read()
     return Response(bytes)

if __name__ == "__main__":
      uvicorn.run(app, port=5000, host="localhost")