import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { blue, white } from '@/styles/colors'

// STYLES
const buttonStyles = StyleSheet.create({
  universal: {
    padding: 16,
    backgroundColor: blue,
    borderRadius: 8,
  },
  default: {
    opacity: 1
  },
  pressed: {
    opacity: 0.7,
  },
})

// TS INTERFACE
interface propTypes {
  text: string,
  func: Function
}
const Button: React.FC<propTypes> = ({text, func}) => {
  return (
    <Pressable hitSlop={10} onPress={()=>func} style={({ pressed }) => [buttonStyles.universal, pressed ? buttonStyles.pressed : buttonStyles.default]}>
      <Text style={{color: white, textAlign: "center"}}>{text}</Text>
    </Pressable>
  )
}

export default Button