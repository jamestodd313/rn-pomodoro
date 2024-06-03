import { View, Text } from 'react-native'
import React from 'react'

// TS Interface
interface propTypes {
  location: string
}

// Component
const Tasks: React.FC<propTypes> = ({location}) => {
  return (
    <View>
      {location == "dashboard" ? (
        <Text>Dashboard Tasks</Text>
      ) : (
        <Text>Tasks Page</Text>
      )}
    </View>
  )
}

export default Tasks