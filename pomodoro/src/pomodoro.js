import React, { useState, useEffect } from "react";

export default function Pomodoro({timerMinutes , timerSeconds , displayMessage} ) {
   

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
     
    </div>
  );
}