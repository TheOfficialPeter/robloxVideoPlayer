const http = require('http')
const ujson = require('ujson')
const url = require("url")

var pixelMap = "";

try {
const server = http.createServer((req, res) => {
    var body = "";

    req.on('data', function(chunk){
        body += chunk;
    })

    req.on('end', function(){
        const reqUrl = url.parse(req.url).pathname
        if (req.method == "GET" && reqUrl == "/"){
            res.end(pixelMap)
        }
        else if (req.method == "POST" && reqUrl == "/post"){
            console.log(ujson.parse(body)["0"])
            pixelMap = ujson.parse(body)["0"]
        }
        res.end("200")
    })
})

server.listen(8080)
}
catch {}
