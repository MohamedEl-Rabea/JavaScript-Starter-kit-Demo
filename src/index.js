import numeral from 'numeral';
import path from 'path';
var fs = require('fs');

fs.readdir('.', function(err, files) {
    console.log(files);
});

const courseValue = numeral(1000).format('$0.00');
console.log(`This course price is ${courseValue}`);

// let rootPath = path.join(__dirname, '/src');
