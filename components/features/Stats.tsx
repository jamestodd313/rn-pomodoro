import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { TimerContext } from '@/context/ContextProvider'
import Stat from '../elements/Stat'
import { convertTime } from '@/hooks/convertTime'

// TS Interface
interface propTypes {
  location: string
}

// Component
const Stats: React.FC<propTypes> = ({location}) => {
  let {focusCompleted, breaksCompleted} = useContext(TimerContext);
  return (
    <View>
      {location === "dashboard" ? (
        <><View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Stat stat={Math.floor((focusCompleted * 1500000) / 60000)} label="Minutes Worked" />
          <Stat stat={0} label="Tasks Completed"/>
          <Stat stat={0} label="Tasks Remaining"/>
        </View></>
      ) : location === "timer" ? (
        <><View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Stat stat={0} label="Minutes Worked"/>
          <Stat stat={0} label="Focus Sessions"/>
          <Stat stat={0} label="Breaks Taken"/>
        </View></>
      ) : location === "tasks" ? (
        <Text>Tasks stats</Text>
      ) : (
        <Text>Pass location prop "dashboard", "timer", or "tasks"</Text>
      )}
    </View>
  )
}

export default Stats