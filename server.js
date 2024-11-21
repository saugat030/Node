const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Nigga world");
  res.end("Hello Nigga");
});
server.listen(5000);
