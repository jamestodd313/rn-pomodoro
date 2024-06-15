import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { toTitleCase } from '@/hooks/toTitleCase'

// TS Interface
interface propTypes {
  text: string,
  styles?: StyleProp<TextStyle>
}

// Styles
const h1Styles = StyleSheet.create({
  main:{
    fontSize: 38,
    fontWeight: "600",
    marginBottom: 16
  } 
})

// Component
const Heading1: React.FC<propTypes> = ({text})=> {
  return(
    <Text accessibilityRole="header" style={h1Styles.main}>{toTitleCase(text)}</Text>
  )
}

export default Heading1