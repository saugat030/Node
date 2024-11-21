const http = require("http");

const server = http.createServer(); //server has a method of on and it provides a request event. Behind the scenes the server emits the request event.
server.on("request", (req, res) => {
  //node docs , go to "http server" and check events for more info
  res.end("Welcome Brother");
});
server.listen(5000);
