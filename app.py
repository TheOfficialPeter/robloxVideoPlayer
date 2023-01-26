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

server_running = True
looping = False
global response
response = ""
nparr = ""

class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

@app.route("/")
def start():
    global looping
    global response

    print("Roblox video framework - Capturing and displaying screen. Have a look on Roblox.")

    # Refresh the image array on the web server
    if looping == False:
        looping = True
        while server_running:
            imgarr = ""

            # define region of screen to grab (todo: make user select which part)
            img = pyautogui.screenshot(region=(0,0,300,300))

            # convert and resisize image
            nparr = np.array(img)
            nparr = cv2.resize(nparr, dsize=(100,100))

            response = app.response_class(
                response=json.dumps(nparr, cls=NumpyArrayEncoder),
                status=200,
                mimetype='application/json'
            )

    return "Running"

@app.route("/get")
def get():
    global response
    return response

# Make a GET request to the /stop directory to stop the app from reading the screen
@app.route("/stop")
def stop():
    print("Roblox video framework - Stopped screen capturing. Restart by visiting '/'")
    global server_running
    server_running = False
    return "Roblox video framework - Stopped screen capturing. Restart by visiting '/'"