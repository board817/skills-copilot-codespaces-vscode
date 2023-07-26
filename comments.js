// create web server

var http = require('http');
var fs = require('fs');

// create web server
http.createServer(function(request, response) {
  // read file
  fs.readFile('HTMLPage.html', function(error, data) {
    // if there is no error, send the data
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
}).listen(52273, function() {
  console.log('Server Running at http://localhost:52273')});