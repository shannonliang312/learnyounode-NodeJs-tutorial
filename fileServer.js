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