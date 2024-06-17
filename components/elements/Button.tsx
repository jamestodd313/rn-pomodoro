import { View, GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
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
    textAlign: "center",
  }
})

interface propTypes {
  text: string,
  func?: (event: GestureResponderEvent)=> void,
  styles?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}
const Button: React.FC<propTypes> = ({text, func, styles}) => {
  return (
    <Pressable hitSlop={10} onPress={func ? func : ()=>console.warn(`No function has been passed to ${text} button.`)} style={({ pressed }) => [buttonStyles.universal, pressed ? buttonStyles.pressed : buttonStyles.default, styles]}>
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text style={[buttonStyles.text, styles, {flex: 0}]}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default Button