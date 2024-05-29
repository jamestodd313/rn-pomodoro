import { useState } from "react";
import { View, Text } from "react-native";

interface TimerTypes {
  display: string
}

export default function Timer({display}: TimerTypes){
  // STATE
  console.log(display)

  // DISPLAY
  if(display === "dashboard"){
    return(
      <View>
        <Text>Dashboard Timer</Text>
      </View>
    )
  } else if(display === "timer page"){
    return(
      <View>
        <Text>Timer Page Timer</Text>
      </View>
    )
  }
}