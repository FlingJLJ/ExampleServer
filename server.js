var fs = require("fs")

var http = require("http")
var port = 80

console.log("Visit \"localhost:80\" in your browser to connect to this server.")

http.createServer((request, response) =>
{
    try
    {
        response.writeHead(200)
        response.write(fs.readFileSync("index.html"))
    }
    catch(error)
    {
        response.write("<h1>Oops! There was an error processing your request.</h1><hr><p>More error info:</p><br>" + error)
        console.log(error)
    }
    response.end()
}).listen(port)