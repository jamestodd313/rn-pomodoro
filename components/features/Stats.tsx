import { View, Text } from 'react-native'
import React from 'react'

// TS Interface
interface propTypes {
  location: string
}

// Component
const Stats: React.FC<propTypes> = ({location}) => {
  return (
    <View>
      {location === "dashboard" ? (
        <Text>Dashboard Stats</Text>
      ) : location === "timer" ? (
        <Text>Timer Stats</Text>
      ) : location === "tasks" ? (
        <Text>Tasks stats</Text>
      ) : (
        <Text>Pass location prop "dashboard", "timer", or "tasks"</Text>
      )}
    </View>
  )
}

export default Stats