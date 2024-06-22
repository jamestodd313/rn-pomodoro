import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { blue, white } from '@/styles/colors'

interface propTypes {
  label: string,
  stat: number

}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: blue,
  },
  stat: {
    fontSize: 28,
    fontWeight: 800,
    color: white
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    color: white,
  }
})
const Stat: React.FC<propTypes> = ({label, stat}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.stat}>{stat}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

export default Stat