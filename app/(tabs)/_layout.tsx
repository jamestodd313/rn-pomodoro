import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default ()=> {
  return(
    <Tabs>
      <Tabs.Screen 
        name="dashboard" 
        options={{
          title: "Home", 
          tabBarIcon: ({color, size, focused})=>(
            focused?
              <Ionicons name="home" size={size} color={color}/>
            :
              <Ionicons name="home-outline" size={size} color={color}/>
          )
        }}
      />
      <Tabs.Screen 
        name="timer"
        options={{
          title: "Timer",
          tabBarIcon: ({color, size, focused})=>(
            focused?
              <Ionicons name="timer" size={size} color={color}/>
            :
              <Ionicons name="timer-outline" size={size} color={color}/>
          )
        }}
      />
      <Tabs.Screen 
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({color, size, focused})=>(
            focused?
              <Ionicons name="list" size={size} color={color}/>
            :
              <Ionicons name="list-outline" size={size} color={color}/>
          )
        }}
      />
      <Tabs.Screen 
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({color,size, focused})=>(
            focused?
              <Ionicons name="settings" size={size} color={color}/>
            :
              <Ionicons name="settings-outline" size={size} color={color}/>
          )
        }}
      />
    </Tabs>
  )
}