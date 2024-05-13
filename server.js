require("dotenv").config();
const { info, warn } = require("./utils/logger")("server:");
const http = require("http");

const server = http.createServer();
const PORT = 3003;

server.listen(PORT);

server.on("listening", () => {
  info(`server is listening ${PORT}`);
});

server.on("request", (req, res) => {
  if (req.url === "/healthcheck" && req.method === "GET") {
    res.statusCode = 200;
    info(`${req.method} ${req.url} ${res.statusCode}`);
    res.end("healthcheck passed");
    return;
  }

  res.statusCode = 404;
  warn(`${req.method} ${req.url} ${res.statusCode}`);
  res.end();
});
