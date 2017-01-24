var arr = process.argv.slice(2);

console.log(arr.reduce(function(a,b){return (+a)+(+b);},0));