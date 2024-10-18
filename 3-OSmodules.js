const os = require('os'); //built in model ./ le chai external module.

// Info  about current user
const user= os.userInfo();
console.log(user);

//Another imp function. 
console.log("The system Uptime is :" + os.uptime());

//Another very imp set of functions :
const currentOS = {
    name:os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);