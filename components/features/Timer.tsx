import { View, Text } from 'react-native'
import React from 'react'

// TS Interface
interface propTypes {
  location: string
}

// Component
const Timer: React.FC<propTypes> = ({location}) => {
  return (
    <View>
      {location === "dashboard" ? (
        <Text>Dashboard Timer</Text>
      ) : (
        <Text>Timer Page Timer</Text>
      )}
    </View>
  )
}

export default Timer