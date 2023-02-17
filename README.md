# Video Player Framework

**Current status: Working** <br/><br/> Initially I wanted to use NodeJs for the screen capture and webserver but now I switched to python, because numpy is great. If you want me to make this framework compatible with NodeJS open a issue and let me know. Also note that I will release a video tutorial when I am finished or close to finish with the project.

The framework aims to povide your roblox game with a utility to watch any video on the internet inside of your roblox game using external screen capture and a webserver.

I do realise that the TOS won't allow such frameworks, but that is why I am letting you know that I am sharing this for educational purposes only, which does not include any malicious intent. Enjoy.

Let me know if I need to add my roblox game files here too so that it can be used as installation reference.

## Known issues

~~- Delay/Lag. It takes a while for the frames to change ( currently on 1 FPS ). I realized it is the reverse proxy I was using. I test running everything locally and the frames refreshed instantly. I am looking for a way around this.~~ The problem was the server I was using. Using lower resolution means faster fps

~~- Display size. At this stage the software reads from your screen and resize the capture to make it bigger in the game, but it doesn't fit to the whole in-game screen. I will be fixing that soon.~~ Just change the size of the array in the python script until it matches your screen

## Installation

1) Open roblox studio on a new empty place
2) Create a block that looks like a tv screen and call it `screenPart`
3) Add a SurfaceLight to the screen and make sure that it is facing your direction (keep the name SurfaceLight)
4) Add a SurfaceGUI to the part and make sure it is facing your direction (Also keep the name SurfaceGUI)
5) Insert the `robloxVideoPlayerServer.lua` script into the tv screen part.
6) Insert the `robloxVideoPlayerClient.lua` script inside of **StarterCharacterScripts** or **StarterPlayerScripts**
7) Edit the `robloxVideoPlayerServer.lua` script and insert your server's url in the **"SERVER_URL_HERE"** string. It should look something like:

  http://SERVERIP:8080/

8) Run the python file which will send the screen information to the server. Make sure it is working by visiting the url yourself.
9) Run the roblox studio game
10) Enjoy!
