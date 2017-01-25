var http = require('http');
var url = require('url');
var portNumber = process.argv[2];

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true);
  var data = {};
  if (urlObj.pathname == '/api/parsetime') {
    var date = new Date(urlObj.query.iso);

    data = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  }
  else if(urlObj.pathname == '/api/unixtime') {
    var time = new Date(urlObj.query.iso) ;
    
    data = {
      "unixtime": +time
    }
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(data));
});
server.listen(portNumber);