//Streams - bit advanced topic in node.
const { writeFileSync } = require("fs");
for (i = 0; i < 10000; i++) {
  writeFileSync("./Test/big.txt", `hello world ${i}\n`, { flag: "a" });
}
