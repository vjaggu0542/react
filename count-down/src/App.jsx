
import { useEffect, useState } from 'react';
import './App.css'
import Countdown from './countdown'


function App() {
  const endTime = new Date('01 01 2025 00:00:00').getTime();
  const [currenttime,setCurrenttime] = useState(new Date().getTime());
  const gap = endTime - currenttime
 
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingdays = Math.floor((gap/days));
  const remaininghours = Math.floor((gap%days)/hours)
  const remainingminutes = Math.floor((gap % hours)/minutes)
  const remainingseconds = Math.floor((gap % minutes) / seconds)

  useEffect(()=>{
       setTimeout(()=>{setCurrenttime(new Date().getTime())},1000)
  },[currenttime])
  
  return (
    <>
       <Countdown days={remainingdays} hours={remaininghours} minutes={remainingminutes} seconds={remainingseconds}/>
    </>
  )
}

export default App
