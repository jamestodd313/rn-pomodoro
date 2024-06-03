import { View, Text } from 'react-native'
import React from 'react'
import Heading1 from '@/components/headings/Heading1'
import { layoutStyles } from '@/styles/layout'

const settings = () => {
  return (
    <View style={layoutStyles.main}>
      <Heading1 text="Settings"/>
    </View>
  )
}

export default settings