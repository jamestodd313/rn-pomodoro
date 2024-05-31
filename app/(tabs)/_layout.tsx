import { Tabs } from "expo-router"

export default ()=> {
  return(
    <Tabs>
      <Tabs.Screen name="dashboard"/>
      <Tabs.Screen name="timer"/>
      <Tabs.Screen name="tasks"/>
      <Tabs.Screen name="settings"/>
    </Tabs>
  )
}