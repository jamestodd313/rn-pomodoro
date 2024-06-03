import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// TS Interface
interface propTypes {
  text: string
}

// Styles
const h1Styles = StyleSheet.create({
  main:{
    fontSize: 38,
    fontWeight: "600"
  } 
})

// Component
const Heading1: React.FC<propTypes> = ({text})=> {
  return(
    <Text accessibilityRole="header" style={h1Styles.main}>{text}</Text>
  )
}

export default Heading1