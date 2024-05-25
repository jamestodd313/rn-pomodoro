import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  h1: {
    fontSize: 38,
    fontWeight: "600",
    marginBottom: 8
  }
})
export default function Heading1(props:any) {
  return (
    <Text accessibilityRole="header" style={styles.h1}>
      {props.children}
    </Text>
  )
}
