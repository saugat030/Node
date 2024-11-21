const { createReadStream } = require("fs");
//highWaterMark le kati bytes definegarxa.
const stream = createReadStream("./Test/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
}); //create stream provides with out of the gate use of event emitters.

//.on is syntax of event emitters.
stream.on("data", (data) => {
  //"data" chai esko predefined event ho
  console.log(data); //64 , 64 bytes gardai chunks ma data retrive garxa by default.
});
//"error event ni hunxa."
stream.on("error", (data) => {
  console.log(data);
});
