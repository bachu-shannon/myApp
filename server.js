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

    function renderDate() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        let date = new Date();
        let H = date.getHours();
        let M = addZero(date.getMinutes());

        return H + ":" + M;
    }

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

    socket.on('logIn', function(msg){
        io.emit('logIn', msg);
    });

});