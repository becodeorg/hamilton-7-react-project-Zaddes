
  import "./App.css";
import Pomodoro from "./pomodoro";

import React, { useState , useEffect } from "react";



const App = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setStart(false);
    setReset(reset + 1);
  };

  


  const remainingTime = ({ remainingTime }) => {
    return (
      <div>
        <h1>{remainingTime}</h1>
      </div>
    );
  };

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;


  const plusun =()=>{
    setMinutes(minutes+1)
  }

  const moinsun =()=>{
    setMinutes(minutes-1)
  }
 
  return (
    <div>
      <Pomodoro 
       isPlaying={start}
      key={reset}
      initialRemainingTime={100}
      timerMinutes={timerMinutes}
      timerSeconds={timerSeconds}
      >
        {({ remainingTime }) => {
          if (!start) {
            console.log(remainingTime);
          }
          return <h1>{remainingTime}</h1>;
          
        }}
      </Pomodoro>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Restart</button>
      <button onClick={plusun}>+1</button>
      <button onClick={moinsun}>-1</button>

    </div>
  );
};

export default App;
