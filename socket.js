var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('search', function (data) {
    socket.emit('testEmit', "hallo test")
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});