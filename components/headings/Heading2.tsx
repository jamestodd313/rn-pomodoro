import { Text, StyleSheet } from 'react-native'
import React from 'react'

// TS Interface
interface propTypes {
  text: string
}

// Styles
const h2Styles = StyleSheet.create({
  main:{
    fontSize: 24,
    fontWeight: "500"
  } 
})

// Component
const Heading2: React.FC<propTypes> = ({text})=> {
  return(
    <Text accessibilityRole="header" style={h2Styles.main}>{text}</Text>
  )
}

export default Heading2