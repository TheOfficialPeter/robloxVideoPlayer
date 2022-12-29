local lightingModule = require(robloxCinemaLighting)

local screen = workspace["MainScreen"]

local screenWidth = 1000
local screenHeight = 1000

-- The list of all pixels (already sorted)
local pixels = {}

-- color totals for each quadrant
local quadrant1 = {0,0,0}
local quadrant2 = {0,0,0}
local quadrant3 = {0,0,0}
local quadrant4 = {0,0,0}

function updatePixels(pixelMap, screenWidth, screenHeight)
    -- update pixels with the pixelMap
    -- screen updates vertically from left to right. It updates in columns
    for i,pixel in pairs(pixels) do
        if pixel.Position.X < screenWidth/2 and pixel.Position.Y < screenHeight/2 then
            -- quadrant 1
            quadrant1[1] = quadrant1[1] + pixel.Color.R
            quadrant1[2] = quadrant1[2] + pixel.Color.G
            quadrant1[3] = quadrant1[3] + pixel.Color.B
        elseif pixel.Position.X > screenWidth/2 and pixel.Position.Y < screenHeight/2 then
            -- quadrant 2
            quadrant2[1] = quadrant2[1] + pixel.Color.R
            quadrant2[2] = quadrant2[2] + pixel.Color.G
            quadrant2[3] = quadrant2[3] + pixel.Color.B
        elseif pixel.Position.X < screenWidth/2 and pixel.Position.Y > screenHeight/2 then
            -- quadrant 3
            quadrant3[1] = quadrant3[1] + pixel.Color.R
            quadrant3[2] = quadrant3[2] + pixel.Color.G
            quadrant3[3] = quadrant3[3] + pixel.Color.B
        elseif pixel.Position.X > screenWidth/2 and pixel.Position.Y > screenHeight/2 then
            -- quadrant 4
            quadrant4[1] = quadrant4[1] + pixel.Color.R
            quadrant4[2] = quadrant4[2] + pixel.Color.G
            quadrant4[3] = quadrant4[3] + pixel.Color.B
        end

        -- Change the pixel's color
    end
end

for i = 1,screenWidth,1 do
    for i2 = 1,screenHeight,1 do
        local pixel = Instance.new("Frame", screen)
        pixel.Name = i.."-"..i2
        pixel.Size = UDim2.new(0,1,0,1)
        pixel.Position = UDim2.fromOffset(i,i2)
        table.insert(pixels, #pixels+1, pixel)
    end
end