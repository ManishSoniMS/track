import { View } from "react-native";

export default function Gap({ dimension = 0 }) {
  return <View style={{ height: dimension, width: dimension }} />;
}
