

import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Button from '../elements/Button'
import { TimerContext } from '@/context/ContextProvider'
import Heading2 from '../headings/Heading2'

// Styles
const styles = StyleSheet.create({
  timeDisplay: {
    fontSize: 72,
    fontWeight: "800",
    textAlign: "center"
  }
})

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
            <Heading2 text={timerType.toUpperCase()} justify="center"/>
            <Text>Time Remaining</Text>
            <Text style={styles.timeDisplay}>{timeRemaining}</Text>
            {/*  CONTROL BUTTONS */}
            <Button
              text={"Reset"}
              func={pauseTimer}
              styles={{backgroundColor: "red"}}
            />
            <Button
              text={"Skip"}
              func={skipTimer}
            />
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