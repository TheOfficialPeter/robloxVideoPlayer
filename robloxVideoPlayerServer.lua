local http = game:GetService("HttpService")

function checkForPixelMap()
	local response = nil
	local s,err = pcall(function()
		response = http:GetAsync("SERVER_URL_HERE") -- Remember to place your server url here.
	end)

	if not s then
		warn("Roblox video framework - Could not connect to server. Error: "..err)
		return false
	else
		if response ~= "" and response ~= nil then
			--print(http:JSONDecode(response))
			return http:JSONDecode(response)
		end
	end
end

-- Keeps on checking for the latest pixel array from the web server
function recursiveCheck()
	local response = checkForPixelMap()

	if #response > 0 and response ~= nil then
		game.ReplicatedStorage.pixelmap:FireAllClients(response)
	end
	recursiveCheck()
end

recursiveCheck()