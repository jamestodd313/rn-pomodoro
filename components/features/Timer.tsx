import { View, Text } from 'react-native'
import React, {createContext, useContext, useState} from 'react'
import Button from '../elements/Button'

// Context
const TimerContext = createContext({
  timeRemaining: 0,
  isRunning: false,
  timerType: "focus", // timer types: focus, short break, long break
  focusCompleted: 0,
  breaksCompleted: 0,
  startTimer: ()=> console.log("start"),
  pauseTimer: ()=> console.log("pause"),
  skipTimer: ()=> console.log("skip")
})

// TS Interface
interface propTypes {
  location: string
}

// Component
const Timer: React.FC<propTypes> = ({location}) => {
  // State
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState("focus");
  const [focusCompleted, setFocusCompleted] = useState(0);
  const [breaksCompleted, setBreaksCompleted] = useState(0);
  // Controls
  const startTimer = ()=> {
    console.log("start timer");
  }
  const pauseTimer = ()=> {
    console.log("pause timer");
  }
  const skipTimer = ()=> {
    console.log("skip timer");
  }
  return (
    <TimerContext.Provider value={{timeRemaining, isRunning, timerType, focusCompleted, breaksCompleted, startTimer, pauseTimer, skipTimer}}>
      <View>
        {location === "dashboard" ? (
          // Dashboard Page Timer Component
          <View>
            <Text>Dashboard Timer</Text> 
          </View>
        ) : (
          // Timer Page Timer Component
          <View>
            <Text>Timer Page Timer</Text>
            <Button text={isRunning ? "Pause" : "Start"} func={startTimer}/>
          </View>
        )}
      </View>
    </TimerContext.Provider>
  )
}

export default Timer