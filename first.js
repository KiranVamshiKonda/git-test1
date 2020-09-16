var http = require('http');
http.createServer(function (req, res) {
    res.write('My docker file ');
    res.end()
}).listen(8000);