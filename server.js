var fs = require("fs")

var http = require("http")
var port = 80

console.log("Visit \"localhost:80\" in your browser to connect to this server.")

http.createServer((request, response) =>
{
    console.log("Good job, you visited the page being hosted on this server!")
    try
    {
        response.writeHead(200)
        response.write(fs.readFileSync("index.html"))
        response.end()
    }
    catch(error)
    {
        response.write("<h1>Oops! There was an error processing your request.</h1><hr><p>More error info:</p><br>" + error)
        response.end()
        console.log(error)
    }
}).listen(port)