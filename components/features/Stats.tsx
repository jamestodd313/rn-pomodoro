import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { TimerContext } from '@/context/ContextProvider'
import Stat from '../elements/Stat'
import { convertTime } from '@/hooks/convertTime'

// TS Interface
interface propTypes {
  location: string
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

// Component
const Stats: React.FC<propTypes> = ({location}) => {
  let {focusCompleted, breaksCompleted} = useContext(TimerContext);
  const calculateMinutes = ()=> {
    return Number(convertTime(focusCompleted * 1500000).split(":")[0]);
  }
  return (
    <View>
      {location === "dashboard" ? (
        <><View style={styles.container}>
          <Stat stat={Math.floor((focusCompleted * 1500000) / 60000)} label="Minutes Worked" />
          <Stat stat={0} label="Tasks Completed"/>
          <Stat stat={0} label="Tasks Remaining"/>
        </View></>
      ) : location === "timer" ? (
        <><View style={styles.container}>
          <Stat stat={calculateMinutes()} label="Minutes Worked"/>
          <Stat stat={focusCompleted} label="Focus Sessions"/>
          <Stat stat={breaksCompleted} label="Breaks Taken"/>
        </View></>
      ) : location === "tasks" ? (
        <><View style={styles.container}>
            <Stat stat={0} label='Due Today'/>
            <Stat stat={0} label='Tasks Completed'/>
            <Stat stat={0} label='Tasks Remaining'/>
        </View></>
      ) : (
        <Text>Pass location prop "dashboard", "timer", or "tasks"</Text>
      )}
    </View>
  )
}

export default Stats