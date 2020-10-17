var fs = require("fs")

var http = require("http")
var port = 80

http.createServer((request, response) =>
{
    try
    {
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