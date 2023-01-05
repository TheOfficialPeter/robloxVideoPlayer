import numpy as np
from PIL import Image

img = Image.open('yes.png')
print(img)

file = open("imgarr.txt","w")
nparr = np.array(img)

count = 0

for i in range(0,49):
    count += 1
    print(count)
    for i2 in range(0,99):
        file.write("[" + str(nparr[i][i2][0]).replace(" ","") + "," + str(nparr[i][i2][1]).replace(" ","") + "," + str(nparr[i][i2][2]).replace(" ","") + "]" + ";")
    file.write(".")

file.close()
print("Done converting image")