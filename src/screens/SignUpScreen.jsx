import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Gap from "../components/Gap";
import { Context as AuthContext } from "../context/AuthContext";

export default function SignUpScreen() {
  const { state, SignUp } = useContext(AuthContext);

  console.log(state);

  const navigation = useNavigation();

  const [email, setEmail] = useState("test1@yopmail.com");
  const [password, setPassword] = useState("123456");

  return (
    <View style={styles.container}>
      <Text h3>Register With Tracker</Text>
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

      {state.errorMessage ? (
        <>
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
          <Gap dimension={10} />
        </>
      ) : null}

      <Button
        title="Register"
        onPress={
          () => {
            SignUp({ email, password });
          } // navigation.navigate("Home")
        }
      />
         <Gap dimension={20} />
        <View style={styles.row}>
              <Text style={styles.normalText}>Already have an Account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.linkText}>Sign In</Text>
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
    alignItems: "stretch",
    verticalAlign: "middle",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  },

  row: { flexDirection: "row", justifyContent: "center" },
  normalText: { fontSize: 12 },
  linkText: { fontSize: 12, fontWeight: 600, color: "blue" },
});
