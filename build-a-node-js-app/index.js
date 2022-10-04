const http = require("http");

http
  .createServer(function (req, res) {
    console.log("request received");
    res.end("omg hi", "utf-8");
  })
  .listen(3000);
console.log("Server started");
