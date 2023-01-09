import numpy as np
from PIL import Image
from flask import Flask
from flask import jsonify
import pyautogui
import json
from json import JSONEncoder
import cv2
import time

app = Flask(__name__)

imgarr = ""
server_running = True

class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

@app.route("/")
def start():
    global imgarr
    print("starting")
    while server_running:
        imgarr = ""
        img = pyautogui.screenshot(region=(0,0,300,300))
        #img = Image.open('yes.png')

        nparr = np.array(img)
        nparr = cv2.resize(nparr, dsize=(200,200))

        response = app.response_class(
            response=json.dumps(nparr, cls=NumpyArrayEncoder),
            status=200,
            mimetype='application/json'
        )

        return response
        #for i in range(0,99):
            #for i2 in range(0,99):
                #imgarr += "[" + str(nparr[i][i2][0]).replace(" ","") + "," + str(nparr[i][i2][1]).replace(" ","") + "," + str(nparr[i][i2][2]).replace(" ","") + "]" + ";"
            #imgarr += "."

@app.route("/stop")
def stop():
    global server_running
    server_running = False
    return "Stopped"