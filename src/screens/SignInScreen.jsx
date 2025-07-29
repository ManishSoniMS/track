import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Gap from "../components/Gap";
import { Context as AuthContext } from "../context/AuthContext";

export default function SignInScreen() {
  const navigation = useNavigation();

  const { state, SignIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text h3>Sign In for Tracker</Text>
      <Gap dimension={70} />
      <Input
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Gap dimension={10} />
      <Button
        title="Sign In"
        onPress={() => {
          SignIn({ email, password });
        }}
      />
      <Gap dimension={20} />
      <View style={styles.row}>
        <Text style={styles.normalText}>{"Don't have an Account? "}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
    // alignContent: "stretch",
    alignItems: "stretch",
    verticalAlign: "middle",
  },

  row: { flexDirection: "row", justifyContent: "center" },
  normalText: { fontSize: 12 },
  linkText: { fontSize: 12, fontWeight: 600, color: "blue" },
});
