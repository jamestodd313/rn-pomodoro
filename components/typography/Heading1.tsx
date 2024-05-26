import { Text, StyleSheet } from "react-native";
import { h1 } from "@/styles/styles";

export default function Heading1(props:any) {
  return (
    <Text accessibilityRole="header" style={h1}>
      {props.children}
    </Text>
  )
}
