# Video Player Framework

Almost done with the main concept thereafter I will make the framework more user-friendly and optimize the code. Initially I wanted to use NodeJs for the screen capture and webserver but now I switched to python, because numpy is great. If you want me to make this framework compatible with NodeJS open a issue and let me know. Also note that I will release a video tutorial when I am finished or close to finish with the project.

The framework aims to povide your roblox game with a utility to watch any video on the internet inside of your roblox game using external screen capture and a webserver.

I do realise that the TOS won't allow such frameworks, but that is why I am letting you know that I am sharing this for educational purposes only, which does not include any malicious intent. Enjoy.

## Known issues

- Delay/Lag. It takes a while for the frames to change ( currently on 1 FPS ), but I am thinking it is the webserver I am using, becuase it takes ~ 3 seconds for roblox to retrieve the pixel color information. I am going to test on a different server and if that doesn't work I will start using compression methods to decrease the size of the data packets.
