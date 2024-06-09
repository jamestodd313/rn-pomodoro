import { View, Text } from 'react-native'
import React from 'react'
import { layoutStyles } from '@/styles/layout'
import Heading1 from '@/components/headings/Heading1'
import Heading2 from '@/components/headings/Heading2'
import Timer from '@/components/features/Timer'
import Tasks from '@/components/features/Tasks'
import Stats from '@/components/features/Stats'
import Button from '@/components/elements/Button'

const dashboard = () => {
  return (
    <View style={layoutStyles.main}>

      <Heading1 text="Dashboard"/>

      {/* Timer Section */}
      <View>
        <Heading2 text="Timer"/>
        <Timer location="dashboard"/>
      </View>

      {/* Tasks Section */}
      <View>
        <Heading2 text="Tasks"/>
        <Tasks location="dashboard"/>
      </View>
 
      {/* Stats Section */}
      <View>
        <Heading2 text="Stats"/>
        <Stats location="dashboard"/>
      </View>

      <Button text="Test Button" func={()=>console.log("pressed")}/>
    </View>
  )
}

export default dashboard