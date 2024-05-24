import { Text, View } from "react-native";
import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    // main view
    <View>
      <Text accessibilityRole="header">Dashboard</Text>
      <View>
        <Text accessibilityRole="header">Timer</Text>
      </View>
      <View>
        <Text accessibilityRole="header">Tasks</Text>
      </View>
      <View>
      <Text accessibilityRole="header">Stats</Text>
      </View>
      <Navbar/>
    </View>
  );
}
