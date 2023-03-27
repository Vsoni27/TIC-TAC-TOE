import { useState, useEffect } from 'react'
import './App.css'
import GamePage from './pages/GamePage'
import HomePage from './pages/HomePage'
import WaitingScreen from './pages/WaitingScreen'
import socket from "./socket"

// If not connected show
// Show connecting

// If not room id
// Show waiting for players

// Else
// Show game



function App() {

  const[isConnected, setIsConnected] = useState(false);
  const [waiting, setwaiting] = useState(false);


  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    socket.on('connect', onConnect);

    return () => {
      socket.off('connect', onConnect);
    };
  }, []);

  return (
    <div className="App" >
      {!isConnected && <HomePage/>}
      {waiting && <WaitingScreen />}
      {!waiting && <GamePage/>}
    </div>
  )
}

export default App
