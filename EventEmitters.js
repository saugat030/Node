//Start Here :
const EventEmitter = require("events"); //Where EventEmitter is a class.

const customEmit = new EventEmitter(); //customEmit is an object of EventEmitter class which makes all the .on() , .emit() methods available.

//Decalre the event.
customEmit.on("resp", () => {
  console.log(`data recieved`);
});
customEmit.on("resp", (name, id) => {
  console.log(`data recieved ${name} ${id}`);
});
// customEmit.on("resp", () => {
//   console.log(`some other data recieved`); //We can have multiple functions for same evtnt
// });

//Emit the event.
customEmit.emit("resp", "saugat", 30);
