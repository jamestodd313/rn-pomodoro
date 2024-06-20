import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Button from '../elements/Button'
import { TimerContext } from '@/context/ContextProvider'
import Heading2 from '../headings/Heading2'
import { blue, gray, red } from '@/styles/colors'
import { convertTime } from '@/hooks/convertTime'
import * as Progress from 'react-native-progress'

// Functions
const calculateProgress = (ms: number)=> {
  return 1 - (ms / 1500000);
}

// Styles
const styles = StyleSheet.create({
  timeDisplay: {
    fontSize: 72,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32
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
          <View style={{
            backgroundColor: gray,
            padding: 16,
            borderRadius: 8,
            marginBottom: 32,
            shadowOffset: {width:0, height: 4},
            shadowRadius: 4,
            shadowColor: "black",
            shadowOpacity: 0.2
          }}>
            <Text style={{
              fontSize: 17,
              textAlign: "center",
              marginBottom: 16
            }}>Time Remaining</Text> 
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Button text={isRunning ? "Pause" : "Start"} func={isRunning ? pauseTimer : startTimer}/>
              <Text style={{
                fontSize: 40,
                fontWeight: 600
              }}>{convertTime(timeRemaining)}</Text>
              <Button text="Skip" func={skipTimer} styles={{backgroundColor: red}}/>
            </View>
            <View style={{marginTop: 24}}>
              <Progress.Bar progress={calculateProgress(timeRemaining)} width={null} height={12} borderRadius={12} borderColor={blue} color={blue}/>  
            </View>
          </View>
        ) : (
          // Timer Page Timer
          <View style={{height: "93%", justifyContent: "space-between"}}>
            <View>
              <Heading2 text={timerType.toUpperCase()} justify="center"/>
              <Text style={{textAlign: "center"}}>Time Remaining</Text>
              <Text style={styles.timeDisplay}>{convertTime(timeRemaining)}</Text>
            </View>
            {/*  CONTROL BUTTONS */}
            <View>
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
            </View>
          </View>
        )}
      </View>
  )
}

export default Timer