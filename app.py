import numpy as np
import requests
from PIL import Image
import pyautogui
import json
from json import JSONEncoder
import cv2
import ujson
import time

nparr = ""

class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

print("Roblox video framework - Capturing and displaying screen. Have a look on Roblox.")
x = 0

while True:
    imgarr = ""

    # define region of screen to grab (todo: make user select which part)
    img = pyautogui.screenshot(region=(0,0,400,200))

    # convert and resisize image
    nparr = np.array(img)
    nparr = cv2.resize(nparr, dsize=(200,100))
    nparr = json.dumps(nparr, cls=NumpyArrayEncoder)

    x += 1
    print(x)
    headers = {'Content-type': 'application/json'}
    requests.post('http://localhost:8080/post', headers=headers, json=ujson.dumps({"pixelmap": nparr}))
