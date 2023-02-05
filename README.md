# Video Player Framework

Almost done with the main concept thereafter I will make the framework more user-friendly and optimize the code. Initially I wanted to use NodeJs for the screen capture and webserver but now I switched to python, because numpy is great. If you want me to make this framework compatible with NodeJS open a issue and let me know. Also note that I will release a video tutorial when I am finished or close to finish with the project.

The framework aims to povide your roblox game with a utility to watch any video on the internet inside of your roblox game using external screen capture and a webserver.

I do realise that the TOS won't allow such frameworks, but that is why I am letting you know that I am sharing this for educational purposes only, which does not include any malicious intent. Enjoy.

I am going to add the roblox game files here as well just for a guideline on how to replicate it to your game. That will happen once I am satisfied with the framework.

## Known issues

~~- Delay/Lag. It takes a while for the frames to change ( currently on 1 FPS ). I realized it is the reverse proxy I was using. I test running everything locally and the frames refreshed instantly. I am looking for a way around this.~~ The problem was the server I was using. Using lower resolution means faster fps

~~- Display size. At this stage the software reads from your screen and resize the capture to make it bigger in the game, but it doesn't fit to the whole in-game screen. I will be fixing that soon.~~ Just change the size of the array in the python script until it matches your screen
