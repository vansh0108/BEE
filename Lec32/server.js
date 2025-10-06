const {WebSocketServer} = require("ws");
const wss = new WebSocketServer({port:8888});

wss.on("connection", function(socket){
    console.log("User connected");
    socket.on("message", function(msg){
        console.log("Message received: " + msg);
        if(msg.toString() === "ping"){
            socket.send("pong");
        }
        
    });
})