var server = require('http').createServer();
var io = require("socket.io")(server);
var port = process.env.PORT || 8031;

server.listen(port);

io.sockets.on('connection', function(socket) {
    console.log('connected to ' + port);
    socket.emit('connected');

    /**
     * @description Obtiene el tiempo actual.
     */
    socket.on('getTime', function() {
        var dateFormat = require('dateformat');
        var currentTime = dateFormat(new Date(), 'HH:MM:ss');
        console.log('/time: currentTime -> ' + currentTime);

        socket.emit('getTimeCallback', { currentTime });
    });

    socket.on('disconnect', function() {
        console.log('disconnected to ' + port);
    });
});
