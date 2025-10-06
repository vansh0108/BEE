const {WebSocketServer} = require("./node_modules/ws");
const wss = new WebSocketServer({port:8888});

// wss.on("connection", function(socket){
//     console.log("User connected");
//     socket.on("message", function(msg){
//         console.log("Message received: " + msg);
//         if(msg.toString() === "ping"){
//             socket.send("pong");
//         }
        
//     });
// })

let allSocket = [];
wss.on("connection", function(socket){
    console.log("User connected");
    allSocket.push(socket);
    socket.on("message", function(msg){
        console.log("Message received: " + msg.toString());
        allSocket.forEach((s)=>{
            s.send(msg.toString());
        }) 
    });
})