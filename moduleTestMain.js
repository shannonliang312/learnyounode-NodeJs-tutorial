var path = require('path');
var extFilter = require('./moduleTest');
var dirName = process.argv[2];
var fileExt = "." + process.argv[3];

function extHandler(err, files) {
  if (err) {
    return console.log(err);
  } else {
    var res = files.filter(function (val) {
      if (path.extname(val) == fileExt) {
        console.log(val);
      }
    });

    return res.length;
  }
}

extFilter(dirName, fileExt, extHandler);