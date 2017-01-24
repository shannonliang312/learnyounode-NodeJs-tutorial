/* Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument. */

var fs = require('fs');
var fileName = process.argv[2];

function callback(err, data) {
  if (!err) {
    var fsStr = data.toString();
    var tmp = fsStr.split('\n');
    console.log(tmp.length - 1);
  }

}

fs.readFile(fileName, callback);