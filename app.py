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

    print("Roblox video framework - Capturing and displaying screen. Have a look on Roblox.")

    # Refresh the image array on the web server
    while server_running:
        imgarr = ""

        # defien region of screen to grab (todo: make user select which part)
        img = pyautogui.screenshot(region=(0,0,300,300))

        # convert and resisize image
        nparr = np.array(img)
        nparr = cv2.resize(nparr, dsize=(200,200))

        # image array is loaded onto the flask server. Make a GET request to get image array
        response = app.response_class(
            response=json.dumps(nparr, cls=NumpyArrayEncoder),
            status=200,
            mimetype='application/json'
        )

        return response
    
        # OLD method of writing my own custom array. I decided to use the default numpy output array. Huge performance boost.
        #for i in range(0,99):
            #for i2 in range(0,99):
                #imgarr += "[" + str(nparr[i][i2][0]).replace(" ","") + "," + str(nparr[i][i2][1]).replace(" ","") + "," + str(nparr[i][i2][2]).replace(" ","") + "]" + ";"
            #imgarr += "."

# Make a GET request to the /stop directory to stop the app from reading the screen
@app.route("/stop")
def stop():
    print("Roblox video framework - Stopped screen capturing. Restart by visiting '/'")
    global server_running
    server_running = False
    return "Roblox video framework - Stopped screen capturing. Restart by visiting '/'"