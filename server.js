var express = require('express');
var app = express();
var server = require('http').Server(app);
var client = require('socket.io')(server);
var path = require('path');

server.listen(8888);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});