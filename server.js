var http = require('http');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
var msg;
server.on('request', function(req, res) {
    switch (req.url) {
        case '/abc':
         msg = 'this page is abc';
         break;
        case '/def':
         msg = 'this page is def';
         break;
        default:
         msg = 'wrong page';
         break;
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(msg);
    res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening ...");