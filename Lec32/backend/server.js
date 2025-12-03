const {WebSocketServer} = require("./node_modules/ws");
const wss = new WebSocketServer({port:8888}); //create a web socket server on port 8888
// Browser sends HTTP request with Upgrade headers
//The server (ws library) responds with some headers and that upgrades connection

// wss.on("connection", function(socket){ // This event fires once the HTTP handshake is successfully upgraded into a WebSocket connection and it give us a socket object
//     console.log("User connected");
//     socket.on("message", function(msg){ // listen for messages from the client or receive messages
//         console.log("Message received: " + msg);
//         if(msg.toString() === "ping"){
//             socket.send("pong"); //This sends a message in real-time to the client
//         }
        
//     });
// })

let allSocket = []; //The allSocket array stores every connected client’s socket,
//  so multiple users can stay connected simultaneously. This also allows broadcasting — sending one client’s message to all clients.
wss.on("connection", function(socket){
    console.log("User connected");
    allSocket.push(socket);
    socket.on("message", function(msg){
        console.log("Message received: " + msg.toString());
        if(msg.toString() === "ping"){
            socket.send("pong");
        }
        allSocket.forEach((s)=>{
            s.send(msg.toString());
        }) 
    });
})