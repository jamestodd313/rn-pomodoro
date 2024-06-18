import { createContext, useEffect, useRef, useState } from "react";
import { GestureResponderEvent } from "react-native";

interface TimerContextTypes {
  timeRemaining: number,
  isRunning: boolean,
  timerType: "focus" | "short break" | "long break",
  focusCompleted: number,
  breaksCompleted: number,
  startTimer: (event: GestureResponderEvent)=> void,
  pauseTimer: (event: GestureResponderEvent)=> void,
  skipTimer: (event: GestureResponderEvent)=> void,
  pauseCallback: (event: GestureResponderEvent)=> void | undefined;
}
export const TimerContext = createContext<TimerContextTypes>({
  timeRemaining: 0,
  isRunning: false,
  timerType: "focus",
  focusCompleted: 0,
  breaksCompleted: 0,
  startTimer: ()=> console.log("start"),
  pauseTimer: ()=> console.log("pause"),
  skipTimer: ()=> console.log("skip"),
  pauseCallback: ()=> console.log("pause callback")
})

const ContextProvider = ({children}: {children: React.ReactNode})=> {
  // STATE
  const [timeRemaining, setTimeRemaining] = useState(1500000);
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState("focus");
  const [focusCompleted, setFocusCompleted] = useState(0);
  const [breaksCompleted, setBreaksCompleted] = useState(0);

  // Interval ID Ref
  const intervalID = useRef(null);

  // TIMER FUNCTIONS
  const startTimer = ()=> {
    if(!isRunning) setIsRunning(true);
    else return
  }

  const pauseTimer = ()=> {
    if(isRunning) setIsRunning(false);
    else console.warn("plz stop tryna break stuff");
  }

  const skipTimer = ()=> {
    handleEnd();
  }

  const handleEnd = ()=> {
    clearInterval(intervalID.current);
    setIsRunning(false);
  }

  useEffect(()=> {
    if(isRunning){
      intervalID.current = setInterval(()=>{
        setTimeRemaining((prevTime)=> Math.max(prevTime - 1000));
      }, 1000)
    } else clearInterval(intervalID.current);
  }, [isRunning])

  return (
    <TimerContext.Provider value={{
      timeRemaining,
      isRunning,
      timerType: timerType as "focus" | "short break" | "long break",
      focusCompleted,
      breaksCompleted,
      startTimer,
      pauseTimer,
      skipTimer,
    }}>
      {children}
    </TimerContext.Provider>
  )
}

export default ContextProvider;