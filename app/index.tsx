import { Text, View } from "react-native";
import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    // main view
    <View>
      <Text>Dashboard</Text>
      <View>
        <Text>Timer</Text>
      </View>
      <View>
        <Text>Tasks</Text>
      </View>
      <View>
      <Text>Stats</Text>
      </View>
      <Navbar/>
    </View>
  );
}
