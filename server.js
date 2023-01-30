const express = require('express')
const https = require('axios')
const { default: axios } = require('axios')

const app = express()
const port = 8080
var pixelMap = "";

app.get('/', (req, res) => {
    res.send("You found the video player's server. WOAH")
})

app.get('/get', (req, res) => {
    res.send(pixelMap);
})

app.post('/post', (req, res) => {
    if (req.query.code && req.query.code == "theofficialpeterisreallyreallcool1100"){
        // save the latest pixelmap
        console.log(req.body);
        pixelMap = JSON.parse(req.body);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})