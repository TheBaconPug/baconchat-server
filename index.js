const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const sockets = require('socket.io');
io = sockets(server);


io.on('connection', function (connection) {
    connection.on('message', function(data) {
        console.log(data);
        io.emit("broadcast", data);
    });
});

app.get('/', (req, res) => {
  res.send(`The server has been started`)
});

server.listen(process.env.PORT, function() {
  console.log('The server has started');
});
