import { View, Text } from 'react-native'
import React from 'react'

interface propTypes {
  text: string
}

const Task: React.FC<propTypes> = ({text}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default Task