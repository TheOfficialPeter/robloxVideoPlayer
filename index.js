const express = require('express')
const app = express()
const port = 3000

app.get('/check', (req, res) => {
	res.statusCode(404);
})

app.get('/get', (req, res) => {
	res.send();
})

app.post('/post', (req, res) => {
	res.send("Success!");
})

app.listen(port, () => {
	console.log(`Roblox Cinema framework is listening on port ${port}`)
})