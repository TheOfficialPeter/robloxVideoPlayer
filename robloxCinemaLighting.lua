local module = {}

module.lights = {}

function module.updateLighting(averageColorArray)
    -- updates the screen lighting effect
    for i,v in pairs(module.lights) do
        v.Color = averageColorArray[i]
    end
end

function module.loadCinemaLighting(mainScreenPart, screenWidth, screenHeight, averageColorArray)
    -- Average Color Array includes the average color for each corner of the screen. Used to set the VIBE of the cinema by adding realistic lighting. Casting rays was my first option, but too performance heavy.
    -- Make sure that the screens lookvector is facing the crowd
    -- Make sure that the screen is placed in the x-axis and not z-axis. It wil cause the lights to be place in the wrong direction
    local lightDistanceFromScreen = 5
    local lightingPosition = mainScreenPart.CFrame.LookVector * lightDistanceFromScreen

    for i = 1,4,1 do
        local newLight = Instance.new("PointLight", workspace)

        if i == 1 then
            newLight.CFrame = lightingPosition.CFrame - Vector3.new(screenWidth/2, screenHeight/2, 0)
        elseif i == 2 then
            newLight.CFrame = lightingPosition.CFrame + Vector3.new(screenWidth/2, 0, 0) - Vector3.new(0, screenHeight/2, 0)
        elseif i == 3 then
            newLight.CFrame = lightingPosition.CFrame - Vector3.new(screenWidth/2, 0, 0) + Vector3.new(0, screenHeight/2, 0)
        elseif i == 4 then
            newLight.CFrame = lightingPosition.CFrame + Vector3.new(screenWidth/2, screenHeight/2, 0)
        end

        table.insert(module.lights, #module.lights+1, newLight)
    end
end

return module