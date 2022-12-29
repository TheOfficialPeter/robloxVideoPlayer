local screen = workspace["MainScreen"]

local screenWidth = 1000
local screenHeight = 1000

-- The list of all pixels (already sorted)
local pixels = {}

function updatePixels(pixelMap)
    -- update pixels with the pixelMap
    -- screen updates vertically from left to right. It updates in columns
    for i,pixel in pairs(pixels) do
        
    end
end

for i = 1,screenWidth,1 do
    for i2 = 1,screenHeight,1 do
        local pixel = Instance.new("Frame", screen)
        pixel.Name = i.."-"..i2
        pixel.Size = UDim2.new(0,1,0,1)
        table.insert(pixels, #pixels+1, pixel)
    end
end