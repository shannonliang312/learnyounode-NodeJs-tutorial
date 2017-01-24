/*  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
 */

var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res){
  res.pipe(bl(function(err, data){
    if(err){
      return console.log(err);
    }
    else {
      console.log(data.toString().split("").length);
      console.log(data.toString());
    }
  }))
})
