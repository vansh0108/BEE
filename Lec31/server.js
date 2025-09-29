const { WebSocketServer } = require('ws');

const ws = new WebSocketServer({ port: 8015 });

//event-handler
ws.on('connection', function(socket){
  console.log(socket);
    setInterval(() => {
    socket.send("Reliance stock price is" + " " + Math.random()); // server to client
  }, 500);
  socket.on('message', function message(data){
    socket.send(data.toString());
  });
});

