var net = require('net');
var strftime = require('strftime');
var portNumber = process.argv[2];

var server = net.createServer(function(socket){
  var date = new Date();
  var data = strftime('%Y-%m-%d %H:%M', date);
  // socket.write(data);
  socket.end(data + "\n");
});

server.listen(portNumber);
