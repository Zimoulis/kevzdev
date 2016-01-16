
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = 3000;



var express = require('./config/express.js')();



express.listen(3000);





//LOG OUT TO THE CONSOLE SO WE KNOW ITS STARTED


console.log('\n\n\n---------------------------------');
console.log('\t SERVER STARTED \t');
console.log('\t \t');
console.log('APP \t =  www.kevZdev.com');
console.log('NODE_ENV =  '+ process.env.NODE_ENV);
console.log('PORT  \t =  '+ port);
console.log('\t \t');
console.log('--------------------------------- \n');

console.log('FIRST SINGLE THREAD DONE \t');