
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
   // res.end('scrackin?');
   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
   myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');

//console.log('sup');

//console.log(__filename);
