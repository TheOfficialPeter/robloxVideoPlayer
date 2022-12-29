local module = {}

local quadrant1 = {}
local quadrant2 = {}
local quadrant3 = {}
local quadrant4 = {}

local screenWidth = 1000
local screenHeight = 1000

table.insert(quadrant1, #quadrant1+1, {0,0})
table.insert(quadrant1, #quadrant1+1, {screenWidth/2, screenHeight/2})

table.insert(quadrant2, #quadrant2+1, {screenWidth/2, 0})
table.insert(quadrant2, #quadrant2+1, {screenWidth, screenHeight/2})

table.insert(quadrant3, #quadrant3+1, {0, screenHeight/2})
table.insert(quadrant3, #quadrant3+1, {screenWidth/2, screenHeight})

table.insert(quadrant4, #quadrant4+1, {screenWidth/2, screenHeight/2})
table.insert(quadrant4, #quadrant4+1, {screenWidth, screenHeight})

function getFirstColor()
    local total = 0
    local totalR = 0
    local totalG = 0
    local totalB = 0
    
    return {totalR/total, totalG/total, totalB/total}
end

function getSecondColor()
    local total = 0
    local totalR = 0
    local totalG = 0
    local totalB = 0
    
    return {totalR/total, totalG/total, totalB/total}
end

function getThirdColor()
    local total = 0
    local totalR = 0
    local totalG = 0
    local totalB = 0
    
    return {totalR/total, totalG/total, totalB/total}
end

function getFourthColor()
    local total = 0
    local totalR = 0
    local totalG = 0
    local totalB = 0
    
    return {totalR/total, totalG/total, totalB/total}
end

local colorFuncs = {getFirstColor, getSecondColor, getThirdColor, getFourthColor}

function module.loadCinemaLighting(mainScreenPart, screenWidth, screenHeight)
    -- Make sure that the screens lookvector is facing the crowd
    -- Make sure that the screen is placed in the x-axis and not z-axis. It wil cause the lights to be place in the wrong direction
    local lightDistanceFromScreen = 5
    local lightingPosition = mainScreenPart.CFrame.LookVector * lightDistanceFromScreen

    for i = 1,4,1 do
        local newLight = Instance.new("PointLight", workspace)
        newLight.Color =  Color3.new(colorFuncs[i])

        if i == 1 then
            newLight.CFrame = lightingPosition.CFrame - Vector3.new(screenWidth/2, screenHeight/2, 0)
        elseif i == 2 then
            newLight.CFrame = lightingPosition.CFrame + Vector3.new(screenWidth/2, 0, 0) - Vector3.new(0, screenHeight/2, 0)
        elseif i == 3 then
            newLight.CFrame = lightingPosition.CFrame - Vector3.new(screenWidth/2, 0, 0) + Vector3.new(0, screenHeight/2, 0)
        elseif i == 4 then
            newLight.CFrame = lightingPosition.CFrame + Vector3.new(screenWidth/2, screenHeight/2, 0)
        end
    end
end

return module