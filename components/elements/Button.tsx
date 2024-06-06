import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface propTypes {
  text: string,
  func: Function
}
const Button: React.FC<propTypes> = ({text, func}) => {
  return (
    <TouchableOpacity>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button