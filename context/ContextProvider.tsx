import { createContext, useState } from "react";
import { GestureResponderEvent } from "react-native";

interface TimerContextTypes {
  timeRemaining: number,
  isRunning: boolean,
  timerType: "focus" | "short break" | "long break",
  focusCompleted: number,
  breaksCompleted: number,
  startTimer: (event: GestureResponderEvent)=> void,
  pauseTimer: (event: GestureResponderEvent)=> void,
  skipTimer: (event: GestureResponderEvent)=> void
}
export const TimerContext = createContext<TimerContextTypes>({
  timeRemaining: 0,
  isRunning: false,
  timerType: "focus",
  focusCompleted: 0,
  breaksCompleted: 0,
  startTimer: ()=> console.log("start"),
  pauseTimer: ()=> console.log("pause"),
  skipTimer: ()=> console.log("skip")
})

const ContextProvider = ({children}: {children: React.ReactNode})=> {
  // STATE
  const [timeRemaining, setTimeRemaining] = useState(1500000);
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState("focus");
  const [focusCompleted, setFocusCompleted] = useState(0);
  const [breaksCompleted, setBreaksCompleted] = useState(0);

  // INTERVAL VAR
  let countdown: ReturnType<typeof setInterval>;

  // TIMER FUNCTIONS
  const startTimer = ()=> {
    console.log("start");
  }
  const pauseTimer = ()=> {
    console.log("pause");
    setIsRunning(!isRunning);
    handleEnd();
  }
  const skipTimer = ()=> {
    handleEnd();
  }
  const handleEnd = ()=> {
    clearInterval(countdown);
    setIsRunning(false);
  }
  return (
    <TimerContext.Provider value={{
      timeRemaining,
      isRunning,
      timerType: timerType as "focus" | "short break" | "long break",
      focusCompleted,
      breaksCompleted,
      startTimer,
      pauseTimer,
      skipTimer
    }}>
      {children}
    </TimerContext.Provider>
  )
}

export default ContextProvider;