import { View, Text } from 'react-native'
import React from 'react'
import { layoutStyles } from '@/styles/layout'
import Heading1 from '@/components/headings/Heading1'

const tasks = () => {
  return (
    <View style={layoutStyles.main}>
      <Heading1 text="Tasks"/>
    </View>
  )
}

export default tasks