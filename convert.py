import numpy as np
from PIL import Image

img = Image.open('yes.png')
print(img)

file = open("imgarr.txt","w")
nparr = np.array(img)

for i in range(0,9):
    for i2 in range(0,9):
        print(nparr[i][i2])
        file.write(str(nparr[i][i2]) + ";")

file.close()
print("Done converting image")