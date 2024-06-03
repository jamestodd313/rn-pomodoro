import { View, Text } from 'react-native'
import React from 'react'
import { layoutStyles } from '@/styles/layout'
import Heading1 from '@/components/headings/Heading1'
import Heading2 from '@/components/headings/Heading2'

const dashboard = () => {
  return (
    <View style={layoutStyles.main}>
      <Heading1 text="Dashboard"/>
      <Heading2 text="Timer"/>
      <Heading2 text="Tasks"/>
      <Heading2 text="Settings"/>
    </View>
  )
}

export default dashboard