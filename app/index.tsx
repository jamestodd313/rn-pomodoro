import { Text, View } from "react-native";
// Components
import Navbar from "@/components/Navbar";
import Heading1 from "@/components/typography/Heading1";
import { layout } from "@/styles/styles";

export default function Index() {
  return (
    <View style={layout}>
      <Heading1>Dashboard</Heading1>
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
