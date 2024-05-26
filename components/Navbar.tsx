import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  navbar:{
    backgroundColor: "#EFEFEF",
    position: "absolute",
    height: 100,
    width:"100%",
    bottom: 0,
    padding: 16
  }
})

export default function Navbar() {
  return (
    <View accessibilityRole="menu" style={styles.navbar}>
      <Text>Navbar</Text>
    </View>
  )
}
