task.wait(5)

local remote = game.ReplicatedStorage.pixelmap
local totalColor = {0,0,0}
local pixels = {}

-- Updates the screen with the latest pixel map. Updates = changes pixel colors
function updateScreen(pixelMap)
	totalColor = {0,0,0}
	local counter = 0

	for i,v in pairs(pixelMap) do
		for i2,v2 in pairs(v) do
			counter = counter + 1
			pcall(function()
				pixels[counter].BackgroundColor3 = Color3.fromRGB(tonumber(v2[1]), tonumber(v2[2]), tonumber(v2[3]))

				totalColor[1] = totalColor[1] + pixels[counter].BackgroundColor3.R
				totalColor[2] = totalColor[2] + pixels[counter].BackgroundColor3.G
				totalColor[3] = totalColor[3] + pixels[counter].BackgroundColor3.B
			end)
		end
	end

	-- OLD method. It worked with the OLD array. I removed both for better performance.
	--[[
	totalColor = {0,0,0}
	--print(pixelmap)
	local realmap = string.gsub(pixelMap, "%[", "")
	realmap = string.gsub(realmap, "%]", "")
	local axismaps = string.split(realmap, ".")
	local counter = 0

	for i,v in pairs(axismaps) do
		local axismaps2 = string.split(v, ";")
		for i2,v2 in pairs(axismaps2) do
			counter = counter + 1
			pcall(function()
				pixels[counter].BackgroundColor3 = Color3.fromRGB(tonumber(v2:split(",")[1]), tonumber(v2:split(",")[2]), tonumber(v2:split(",")[3]))

				totalColor[1] = totalColor[1] + pixels[counter].BackgroundColor3.R
				totalColor[2] = totalColor[2] + pixels[counter].BackgroundColor3.G
				totalColor[3] = totalColor[3] + pixels[counter].BackgroundColor3.B
			end)
		end
	end
	]]--

	local average = 300 -- This should be change to the total amount of pixels. 300 is default.
	workspace.screenPart.SurfaceLight.Color = Color3.fromRGB(totalColor[1]/average, totalColor[2]/average, totalColor[3]/average)
end

-- Creates all the pixels and places them into the screenGUI's frame
function createScreen(screenPart, pixelMap)
	local pixelSize = 20
	for i,v in pairs(pixelMap) do
		for i2,v2 in pairs(v) do
			local pixel = Instance.new("Frame", screenPart)
			pixel.Name = i.."-"..i2
			pixel.BorderSizePixel = 0
			pixel.Size = UDim2.new(0,pixelSize,0,pixelSize)
			pixel.Position = UDim2.fromOffset(i2*pixelSize,i*pixelSize)
			pixel.BackgroundColor3 = Color3.fromRGB(tonumber(v2[1]), tonumber(v2[2]), tonumber(v2[3]))

			totalColor[1] = totalColor[1] + pixel.BackgroundColor3.R
			totalColor[2] = totalColor[2] + pixel.BackgroundColor3.G
			totalColor[3] = totalColor[3] + pixel.BackgroundColor3.B

			table.insert(pixels, pixel)
		end
	end

	--[[ local pixelMap = pixelMap
	--print(pixelMap)
	local realMap = string.gsub(pixelMap, "%[", "")
	realMap = string.gsub(realMap, "%]", "")
	local axismaps = string.split(realMap, ".")
	local axismaps2 = nil

	local pixelSize = 20
	for i,v in pairs(axismaps) do
		axismaps2 = string.split(v, ";")
		for i2,v2 in pairs(axismaps2) do
			local pixel = Instance.new("Frame", screenPart)
			pixel.Name = i.."-"..i2
			pixel.BorderSizePixel = 0
			pixel.Size = UDim2.new(0,pixelSize,0,pixelSize)
			pixel.Position = UDim2.fromOffset(i2*pixelSize,i*pixelSize)
			pixel.BackgroundColor3 = Color3.fromRGB(tonumber(v2:split(",")[1]), tonumber(v2:split(",")[2]), tonumber(v2:split(",")[3]))

			totalColor[1] = totalColor[1] + pixel.BackgroundColor3.R
			totalColor[2] = totalColor[2] + pixel.BackgroundColor3.G
			totalColor[3] = totalColor[3] + pixel.BackgroundColor3.B	

			table.insert(pixels, pixel)
		end
	end
	]]--

	local average = 300 -- This should be change to the total amount of pixels. 300 is default.
	workspace.screenPart.SurfaceLight.Color = Color3.fromRGB(totalColor[1]/average, totalColor[2]/average, totalColor[3]/average)
end


-- Client-Server connection.
-- We wait for the server to send the client the latest information about the pixel color arrays.
-- At the first iteration we will be creating the pixels and thereafter we just update their colors

local i = 0

remote.OnClientEvent:Connect(function(pixelMap)
	i += 1
	if i == 1 then
		createScreen(workspace.screenPart.SurfaceGui, pixelMap)
	end

	updateScreen(pixelMap)
end)