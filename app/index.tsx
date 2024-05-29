import { Text, View } from "react-native";
// Components
import Navbar from "@/components/Navbar";
import Heading1 from "@/components/typography/Heading1";
import { layout } from "@/styles/styles";
import Timer from "@/components/Timer";

export default function Index() {
  return (
    <View style={layout}>
      <Heading1>Dashboard</Heading1>
      <Timer display="dashboard"/>
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
