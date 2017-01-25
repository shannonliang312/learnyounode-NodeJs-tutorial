/* Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response. */

var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res) {
  // request handling logic...
  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});
server.listen(portNumber);