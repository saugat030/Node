const path = require('path');

console.log(path.sep); //Slash le seperate hunxa windows ko case ma. So slash will be printed.
const filePath = path.join('/Text','test.txt');
console.log(filePath);
console.log(path.basename(filePath));
// SUPERRRR IMP:
const absolute = path.resolve(__dirname, 'Test', 'test.txt');
console.log(absolute);