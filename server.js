var httpServer = require("http-server");
var path = require("path");
var server = httpServer.createServer({
  root: path.join(__dirname, "")
});
server.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});