const file = require ('fs');
//Read:
//utf8 halena vane code aauxa ascii ma instead of data.
//This is callback hell. ek paxi arko task garna ek paxi arko ma callback handai janu parxa. This is not good practice.
file.readFile('./Test/test.txt' ,'utf8', (err , data)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = data; //Pailo file read garera first ma halyo tersko data.
    file.readFile('./Test/test2.txt' ,'utf8', (err , data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = data; //dosro file read garera second ma halyo data
        file.writeFile('./Test/testWriteSync.txt', `${first} ${second}`, (err)=>{
           if(err){
            console.log(err);
            return; 
           }
         //first ra second lai Write garyo naya file ma.
        })
    })
})