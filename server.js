var httpServer = require("http-server");
var path = require("path");
var server = httpServer.createServer({ root: path.join(__dirname, "") });
server.listen(3000);
