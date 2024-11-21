//Start Here :

const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile); //these two can agaijn be replaced by just doing require("fs").promises. Tes paxi we can directly use await readFile(.....) instead of readFilePromise(.....).
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./Test/test.txt", "utf8");
    const second = await readFilePromise("./Test/test2.txt", "utf8");
    await writeFilePromise(
      "./Test/anotherFile.txt",
      `CRAZY CRAZY!!! : ${first} ${second} `
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

//Try expirementing this with different file or a file that doesnt exist.
// getText("./Test/test2.txt") //aba yo function lai invoke handa tyo promise le ki ta resolve dinxa ki ta error dinxa. Resolve chai .then le catch hanxa ani reject chai .catch le.
//   .then((data) => console.log(data)) //resolve ko kura ya aauxa
//   .catch((err) => console.log(err));
// const getText = (path) => {
//   //Paila euta get text naam ko function banako jasle chai promise return garxa.
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
