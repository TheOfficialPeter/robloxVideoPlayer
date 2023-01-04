local lightingModule = require(robloxCinemaLighting)

local screenPart = workspace["MainScreen"]
local http = game:GetService("HttpService")
local screenWidth = 1000
local screenHeight = 1000

-- The list of all pixels (already sorted)
local pixels = {}

local totalColor = {0,0,0}

function updateLighting(light, colorArray)
    light.Color = Color3.fromRGB(colorArray)
end

function addLighting(screenPart)
    local light = Instance.new("SurfaceLight", screenPart)
    light.Name = "CinemaLight"
    light.Range = 60
    light.Brightness = 1

    return light
end

function checkForPixelMap()
    local response = nil
    local s,err = pcall(function()
        response = http:GetAsync()
    end)

    if not s then
        warn("Cinema Framework - Could not connect to server. Error: "..err)
        return false
    else
        if response ~= nil then
            return http:JSONDecode(response)
        end
    end
end

function getAverageColors()
    local avg = {totalColor[1]/(screenWidth*screenHeight), totalColor[2]/(screenWidth*screenHeight), totalColor[3]/(screenWidth*screenHeight)}
    return {avg}
end

function updatePixels(pixelMap, screenWidth, screenHeight)
    -- update pixels with the pixelMap
    -- screen updates vertically from left to right. It updates in columns
    -- also updates lighting effect (the if statements)
    for i,pixel in pairs(pixels) do
        totalColor[1] = totalColor[1] + pixel.Color.R
        totalColor[2] = totalColor[2] + pixel.Color.G
        totalColor[3] = totalColor[3] + pixel.Color.B

        pixel.Color = Color3.fromRGB(pixelMap[i])
    end

    -- Add the realistic cinema lighting
    local colorArray = getAverageColors()
    local light = addLighting()
    updateLighting(light, colorArray)
end

lightingModule.loadCinemaLighting()
lightingModule.updateLighting(getAverageColors())

function startLoop()
    game:GetService("RunService").RenderStepped:Connect(function(deltaTime)
        local pixelMap = checkForPixelMap()

        if pixelMap then
            updatePixels(pixelMap, 1000, 1000)
        end
    end)
end

local pixelMap = script.Parent.pixelMap.Value
--print(pixelMap)
local realMap = string.gsub(pixelMap, "%[", "")
realMap = string.gsub(realMap, "%]", "")
axismaps = string.split(realMap, ".")

function createScreen(screenPart)
	local pixelSize = 10
	for i,v in pairs(axismaps) do
		local axismaps2 = string.split(v, ";")
		for i2,v2 in pairs(axismaps2) do
			local pixel = Instance.new("Frame", screenPart)
			pixel.Name = i.."-"..i2
			pixel.BorderSizePixel = 0
			pixel.Size = UDim2.new(0,pixelSize,0,pixelSize)
			pixel.Position = UDim2.fromOffset(i2*pixelSize,i*pixelSize)
			pixel.BackgroundColor3 = Color3.fromRGB(tonumber(v2:split(",")[1]), tonumber(v2:split(",")[2]), tonumber(v2:split(",")[3]))
		end
	end
end

createScreen(script.Parent.SurfaceGui)