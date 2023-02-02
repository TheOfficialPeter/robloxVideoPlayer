import numpy as np
import requests
from PIL import Image
import pyautogui
import json
from json import JSONEncoder
import cv2
import time

looping = True
response = ""
nparr = ""

class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

print("Roblox video framework - Capturing and displaying screen. Have a look on Roblox.")

while looping:
    imgarr = ""

    # define region of screen to grab (todo: make user select which part)
    img = pyautogui.screenshot(region=(0,0,300,300))

    # convert and resisize image
    nparr = np.array(img)
    nparr = cv2.resize(nparr, dsize=(100,100))
    nparr = json.dumps(nparr, cls=NumpyArrayEncoder)

    headers = {"Content-Type": "application/json; charset=utf-8"}
    requests.post('http://localhost:8080/post?code=theofficialpeterisreallyreallcool1100', headers=headers, json={'pixelmap': nparr})