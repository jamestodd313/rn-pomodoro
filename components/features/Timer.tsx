

import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Button from '../elements/Button'
import { TimerContext } from '@/context/ContextProvider'
import Heading2 from '../headings/Heading2'
import { gray, red } from '@/styles/colors'
import { convertTime } from '@/hooks/convertTime'

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
          // Dashboard Page Timer
          <View>
            <Text>Dashboard Timer</Text> 
          </View>
        ) : (
          // Timer Page Timer
          <View>
            <Heading2 text={timerType.toUpperCase()} justify="center"/>
            <Text style={{textAlign: "center"}}>Time Remaining</Text>
            <Text style={styles.timeDisplay}>{convertTime(timeRemaining)}</Text>
            {/*  CONTROL BUTTONS */}
            <View style={{flexDirection: "row", justifyContent: 'space-between', marginBottom: 8}}>
              <Button
                text={"Reset"}
                func={pauseTimer}
                styles={{backgroundColor: "#d5d5d5", color: "#616161", flex:0.5, marginRight: 4}}
              />
              <Button
                text={"Skip"}
                func={skipTimer}
                styles={{backgroundColor: red, flex:0.5 , marginLeft: 4}}
              />
            </View>
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