/* This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.   */

var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);

http.get(urls[0], function (res) {
  res.pipe(bl(function (err, data) {
    if (err) {
      return console.log(err);
    } else {
      console.log(data.toString());
      http.get(urls[1], function (res) {
        res.pipe(bl(function (err, data) {
          if (err) {
            return console.log(err);
          } else {
            console.log(data.toString());
            http.get(urls[2], function (res) {
              res.pipe(bl(function (err, data) {
                if (err) {
                  return console.log(err);
                } else {
                  console.log(data.toString());
                }
              }))
            })
          }
        }))
      })
    }
  }))
})

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0


// function printResults() {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }