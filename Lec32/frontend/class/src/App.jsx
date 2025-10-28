import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  //use Effect --> hook use to do side-effect in react
  let [ws,setWs] = useState(null); //to create state variable
  let inputRef = useRef();


  useEffect(()=>{
    let socket = new WebSocket("ws://localhost:8888");
    socket.onmessage=((e)=>{
      console.log(e.data);
    })
    setWs(socket);
  },[]);
  

  function sendMessage(){
    let message = inputRef.current.value;
    ws.send(message);
    inputRef.current.value = "";
   95
  }

  return (
    <>
    <h1>Ping Pong</h1>
    <input type="text" />
    <button onClick={sendMessage}>Send</button>
 
    </>
  )
}

export default App
