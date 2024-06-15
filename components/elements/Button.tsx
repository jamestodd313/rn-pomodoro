import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'
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
  text: {
    fontWeight: "600",
    color: white,
    textAlign: "center"
  }
})

// TS INTERFACE
interface propTypes {
  text: string,
  func: (event: GestureResponderEvent)=> void,
  styles?: StyleProp<ViewStyle>
}
const Button: React.FC<propTypes> = ({text, func, styles}) => {
  return (
    <Pressable hitSlop={10} onPress={func} style={({ pressed }) => [buttonStyles.universal, pressed ? buttonStyles.pressed : buttonStyles.default, styles]}>
      <Text style={buttonStyles.text}>{text}</Text>
    </Pressable>
  )
}

export default Button