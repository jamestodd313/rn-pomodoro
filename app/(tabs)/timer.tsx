import { View, Text } from 'react-native'
import React from 'react'
import { layoutStyles } from '@/styles/layout'
import Heading1 from '@/components/headings/Heading1'
import Timer from '@/components/features/Timer'
import Stats from '@/components/features/Stats'



// Page
const timer = () => {
  return (
    <View style={layoutStyles.main}>
      <Heading1 text="Timer"/>
      <Timer location="page"/>
    </View>
  )
}

export default timer