import { StyleSheet, View } from "react-native";

export default function Spacer({ child }) {
  return <View style={styles.spacer}>{child}</View>;
}

const styles = StyleSheet.create({ spacer: { margin: 15 } });
