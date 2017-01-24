/* Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout). */
var arr = process.argv.slice(2);

console.log(arr.reduce(function(a,b){return (+a)+(+b);},0));