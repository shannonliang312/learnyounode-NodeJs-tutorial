module.exports = function (dirName, fileExt, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dirName, function(err, files){
    if(!err) {
      callback(null, files);
    }
    else {
      return callback(err);
    }
  });
}