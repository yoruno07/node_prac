var http = require('http'),
    fs = require('fs');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
var msg;
server.on('request', function(req, res) {
        fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {
                if (err) {
                        res.writeHead(404, {'Content-Type': 'text/plain'});
                        res.write("not found!");
                         return res.end();
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
});
server.listen(settings.port, settings.host);
console.log("server listening ...");