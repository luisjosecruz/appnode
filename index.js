const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New Client Conneted');
    socket.emit('mensaje', 'Welcome');
    
    socket.on('test', sms => {
        io.emit('test', sms);
    });
});

server.listen(8080, function(){
    console.log('Init Server');
});
