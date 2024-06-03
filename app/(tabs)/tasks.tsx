import { View, Text } from 'react-native'
import React from 'react'
import { layoutStyles } from '@/styles/layout'
import Heading1 from '@/components/headings/Heading1'
import Tasks from '@/components/features/Tasks'
import Stats from '@/components/features/Stats'

const tasks = () => {
  return (
    <View style={layoutStyles.main}>
      <Heading1 text="Tasks"/>
      <Tasks location="tasks"/>
      <Stats location="tasks"/>
    </View>
  )
}

export default tasks