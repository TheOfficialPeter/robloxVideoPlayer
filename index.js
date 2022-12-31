const express = require('express')
const { screen } = require('@nut-tree/nut-js');
const app = express()
const port = 3000

var img = ""

app.get('/checkPixelMap', (req, res) => {
	if (img != "") {
		res.sendStatus(200)
	}
	else 
	{
		res.sendStatus(404);
	}
})

app.get('/recievePixelMap', (req, res) => {
	res.send();
})

app.post('/submitPixelMap', (req, res) => {
	res.send("Success!");
})

app.listen(port, () => {
	console.log(`Roblox Cinema framework is listening on port ${port}`)
	//img = screen.grabRegion(0,0,100,100)
})