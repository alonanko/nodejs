var fs = require('fs');

var filePath = process.argv[2]

var buf = fs.readFileSync(filePath);

var str = buf.toString();

var n = str.split('\n').length;

console.log(n-1)
