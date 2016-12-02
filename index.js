var http      = require('http');
var server    = http.createServer(function(req, res) {
  req.writeHead(200, {"Content-Type": "text/plain"});
  req.end('Hello, Ye!\n');
}).listen('8080');

console.log("Server running at http://localhost:8000/");
