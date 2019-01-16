var http = require("http");
http.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"test/plain"});
  response.write("It is a Beanstalk sample written by Nodejs.");
  response.end();
}).listen(3456);
console.log('Server running at http://127.0.0.1:3456/');