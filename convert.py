import numpy as np
from PIL import Image

img = Image.open('yes.png')
print(img)

file = open("imgarr.txt","w")
nparr = np.array(img)

for i in range(0,len(nparr)):
    for i2 in range(0, len(nparr[i])):
        file.write(str(nparr[i][i2]) + ";")

file.close()
print("Done converting image")