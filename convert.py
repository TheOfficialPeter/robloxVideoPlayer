import numpy as np
from PIL import Image
import pyautogui
import cv2

#img = pyautogui.screenshot(region=(0,0,1980,1080))
img = Image.open('yes.png')

file = open("imgarr.txt","w")
nparr = np.array(img)

nparr = cv2.resize(nparr, dsize=(200,100))

count = 0

for i in range(0,99):
    count += 1
    print(count)
    for i2 in range(0,199):
        file.write("[" + str(nparr[i][i2][0]).replace(" ","") + "," + str(nparr[i][i2][1]).replace(" ","") + "," + str(nparr[i][i2][2]).replace(" ","") + "]" + ";")
    file.write(".")

file.close()
print("Done converting image")