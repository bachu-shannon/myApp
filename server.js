var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

server.listen(8888);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

    socket.on('login user', function(user){
        io.emit('login user', user);
    });

});