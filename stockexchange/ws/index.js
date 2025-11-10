// Forwarding entry so old "node index" command still works after moving code into ./api
require('../api/index.js');
const {WebsocketServer} = require('ws');
let {subscriber} = require('../shared/index.js');
const wss = new WebsocketServer({port:8080});

wss.on("connection",(socket)=>[
    console.log("New client connected")
]);
async function orderBookUpdate(){
    await subscriber.subscribe('book_update',(message)=>{
    //broadcasting
})
}