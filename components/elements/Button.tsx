import { Pressable, Text } from 'react-native'
import React from 'react'

interface propTypes {
  text: string,
  func: Function
}
const Button: React.FC<propTypes> = ({text, func}) => {
  return (
    <Pressable>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default Button