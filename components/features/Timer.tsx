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
  let {timerType, timeRemaining, isRunning, focusCompleted, breaksCompleted, startTimer, pauseTimer, skipTimer} = useContext(TimerContext);
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
            <Text>{timeRemaining}</Text>

            {/* START / PAUSE BUTTON */}
            <Button 
              text={isRunning ? "Pause" : "Start"} 
              func={!isRunning ? startTimer : pauseTimer}
            />
            
            {/* SKIP BUTTON -- IF NEEDED */}
            {isRunning ? 
              <Button 
                text="Skip" 
                func={skipTimer}
              /> : null}

          </View>
        )}
      </View>
  )
}

export default Timer