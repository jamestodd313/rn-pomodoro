import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { toTitleCase } from '@/hooks/toTitleCase'

// TS Interface
interface propTypes {
  text: string,
  justify: string
}

// Styles
const h2Styles = StyleSheet.create({
  main:{
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 8,
  } 
})

// Component
const Heading2: React.FC<propTypes> = ({text, justify})=> {
  return(
    <Text accessibilityRole="header" style={[
      h2Styles.main,
      justify === 'center' && { textAlign: 'center' },
      justify === 'left' && { textAlign: 'left' },
      justify === 'right' && { textAlign: 'right' },
    ]}>{toTitleCase(text)}</Text>
  )
}

export default Heading2