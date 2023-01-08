local lightingModule = require(robloxCinemaLighting)

local screenPart = workspace["MainScreen"]
local http = game:GetService("HttpService")
local screenWidth = 1000
local screenHeight = 1000

-- The list of all pixels (already sorted)
local pixels = {}

local totalColor = {0,0,0}

function checkForPixelMap()
    local response = nil
    local s,err = pcall(function()
        response = http:GetAsync()
    end)

    if not s then
        warn("Video Player Framework - Could not connect to server. Error: "..err)
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
    --print(pixelmap)
    local realmap = string.gsub(pixelMap, "%[", "")
    realmap = string.gsub(realmap, "%]", "")
    local axismaps = string.split(realmap, ".")
    screenHeight = #axismaps
    local counter = 0

    for i,v in pairs(axismaps) do
		local axismaps2 = string.split(v, ";")
        screenWidth = #axismaps2
        for i2,v2 in pairs(axismaps2) do
            counter = counter + 1
			pixels[counter].BackgroundColor3 = Color3.fromRGB(tonumber(v2:split(",")[1]), tonumber(v2:split(",")[2]), tonumber(v2:split(",")[3]))

            totalColor[1] = totalColor[1] + v2.BackgroundColor3.R
            totalColor[2] = totalColor[2] + v2.BackgroundColor3.G
            totalColor[3] = totalColor[3] + v2.BackgroundColor3.B
        end
    end

    local colorArray = getAverageColors()
    workspace.screenPart.SurfaceLight.Color = Color3.fromRGB(colorArray)
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

local pixelmap = script.parent.pixelmap.value
--print(pixelmap)
local realmap = string.gsub(pixelmap, "%[", "")
realmap = string.gsub(realmap, "%]", "")
local axismaps = string.split(realmap, ".")

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
            
            table.insert(pixels, pixel)
		end
	end
end

createScreen(script.Parent.SurfaceGui)
