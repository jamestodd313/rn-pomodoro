import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Button from '../elements/Button'
import { TimerContext } from '@/context/ContextProvider'


// TS Interface
interface propTypes {
  location: string
}

// Component
const Timer: React.FC<propTypes> = ({location}) => {
  let {timerType, timeRemaining, isRunning, focusCompleted, breaksCompleted} = useContext(TimerContext);
  return (
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
            {/* <Button text={isRunning ? "Pause" : "Start"} func={!isRunning ? startTimer : pauseTimer}/> */}
          </View>
        )}
      </View>
  )
}

export default Timer