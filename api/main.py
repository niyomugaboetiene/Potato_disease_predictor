from fastapi import FastAPI

app = FastAPI()

@app.get('/ping')
async def ping():
    return "I'm working keep go on!!" # just to make sure our server is running