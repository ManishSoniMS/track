import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TrackListScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>TrackListScreen</Text>

      <Button
        title="Track Detail"
        onPress={() => {
          navigation.navigate("TrackDetail");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
