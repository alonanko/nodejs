var fs = require('fs');
var num = 0;
var filePath = process.argv[2]

function counter(callback) {
	fs.readFile(filePath, function  doneReading(err, data){
		num = (data.toString()).split('\n').length;
		callback()
	})
}

function logMyNumber() {
	console.log(num-1)
}

counter(logMyNumber)
