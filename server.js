const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

const app = express()
const port = 8080
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({limit: "1mb", extended: true}))

var pixelMap = "";

app.get('/', (req, res) => {
    res.send("You found the video player's server. WOAH")
})

app.get('/get', (req, res) => {
    res.send(pixelMap);
})

app.post('/post', upload.array(), (req, res, next) => {
    if (req.query.code){
        console.log(req.body);
        pixelMap = req.body;
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})