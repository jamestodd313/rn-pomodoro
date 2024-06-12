import { createContext, useState } from "react";

export const TimerContext = createContext({
  timeRemaining: 0,
  isRunning: false,
  timerType: "focus", // timer types: focus, short break, long break
  focusCompleted: 0,
  breaksCompleted: 0,
  startTimer: ()=> console.log("start"),
  pauseTimer: ()=> console.log("pause"),
  skipTimer: ()=> console.log("skip")
})

const ContextProvider = ({children}: {children: React.ReactNode})=> {

  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState("focus");
  const [focusCompleted, setFocusCompleted] = useState(0);
  const [breaksCompleted, setBreaksCompleted] = useState(0);

  return (
    <TimerContext.Provider value={{
      timeRemaining,
      isRunning,
      timerType,
      focusCompleted,
      breaksCompleted,
    }}>
      {children}
    </TimerContext.Provider>
  )
}

export default ContextProvider;