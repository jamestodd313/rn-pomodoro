import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
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
  styles?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}
const Button: React.FC<propTypes> = ({text, func, styles}) => {
  console.log(styles)
  return (
    <Pressable hitSlop={10} onPress={func} style={({ pressed }) => [buttonStyles.universal, pressed ? buttonStyles.pressed : buttonStyles.default, styles]}>
      <Text style={[buttonStyles.text, styles]}>{text}</Text>
    </Pressable>
  )
}

export default Button