var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var n = 0;
server.on('request', function(req, res) {
    console.log(req.url);
      if (req.url === '/favicon.ico') {
         return;
      }
    n++;
    var data = ejs.render(template, {
        title: "hello",
        content: "<strong>World!</strong>",
        n: n
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening ...");