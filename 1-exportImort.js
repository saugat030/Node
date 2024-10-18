//Every File in js is module by default.

const names = require('./3-names'); //This will make it so that whole of ./3-names.js file executes so its console.log is also executing.
const sayHi = require('./3-utils.js'); 
const data = require('./4-alternativeWay.js');
//require('./hello.js') makes it execute that file hello.js. 

console.log (data);
console.log(names);

sayHi(names.john);
sayHi(names.sins);
sayHi("Saugat");