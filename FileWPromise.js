//Start Here :

const { readFile } = require("fs");

const getText = (path) => {
  //Paila euta get text naam ko function banako jasle chai promise return garxa.
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

//Try expirementing this with different file or a file that doesnt exist.

getText("./Test/test2.txt") //aba yo function lai invoke handa tyo promise le ki ta resolve dinxa ki ta error dinxa. Resolve chai .then le catch hanxa ani reject chai .catch le.
  .then((data) => console.log(data)) //resolve ko kura ya aauxa
  .catch((err) => console.log(err));
