import { useState } from "react";

// STATE
export const [timeRemaining, setTimeRemaining] = useState<number>(1500000); // use for countdown
export const [timerType, setTimerType] = useState<string>("focus"); // options: focus, short break, long break
export const [breaksCompleted, setBreaksCompleted] = useState<number>(0); // use to determine if short or long break
export const [focusCompleted, setFocusCompleted] = useState<number>(0);
export const [focusMinutesCompleted, setFocusMinutesCompleted] = useState<number>(0); // input milliseconds and run through convertTime just for continuity


// FUNCTIONS
const endTimer = ()=> {
  // this will be triggered by hooks, it will increment stats, update timerType, other stuff i'm forgetting probably
  console.log("end timer")
}

const convertTime = (ms: number)=> {
  // used by startTimer
  // use this to convert ms to m:s
  console.log(ms)
}

const handleBreak = ()=>{
  // use breaksCompleted to determine if upcoming break should be short or long
  // use convertTime to set timeRemaining
}

// HOOKS
export const startTimer = ()=> {
  console.log("start timer");
}

export const pauseTimer = ()=> {
  console.log("pause timer");
}

export const skipTimer = ()=> {
  console.log("skip timer");
}



