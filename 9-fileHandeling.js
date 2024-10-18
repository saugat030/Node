const file = require('fs');

//Read
let first = file.readFileSync('./Test/test.txt','utf8');
let second = file.readFileSync('./Test/test2.txt','utf8');
console.log(first, second);

//Write and Append:
file.writeFileSync('./Test/testWrite.txt','FOUL TARNISHED'); // If a file doesnt exist node will create them but if a file exists it will overwrite them.
file.writeFileSync('./Test/testWrite.txt',' EMBODIED BY THE FLAME OF AMBITION', {flag: 'a'}); //Flag: a means append.