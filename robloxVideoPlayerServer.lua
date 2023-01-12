-- MAKING A GET REQUEST TO SERVER SHOULD RETURN A NUMPY ARRAY OF PIXEL VALUES

local http = game:GetService("HttpService")

function checkForPixelMap()
	local response = nil
	local s,err = pcall(function()
		response = http:GetAsync("SERVER_URL_HERE")
	end)

	if not s then
		warn("Video Player Framework - Could not connect to server. Error: "..err)
		return false
	else
		if response ~= "" and response ~= nil then
			--print(http:JSONDecode(response))
			return http:JSONDecode(response)
		end
	end
end

function recursiveCheck()
	local response = checkForPixelMap()

	if #response > 0 and response ~= nil then
		game.ReplicatedStorage.pixelmap:FireAllClients(response)
	end
	recursiveCheck()
end

recursiveCheck()