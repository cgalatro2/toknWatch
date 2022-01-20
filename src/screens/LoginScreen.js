import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button, Divider } from "react-native-elements";
import { Context as AuthContext } from "~/context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { state, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Input
        label="Email"
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
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Button title="Log in" onPress={() => login({ email, password })} />
      <Divider style={styles.divider} />
      <Button
        title="Don't have an account? Click to sign up"
        onPress={() => navigation.navigate("Sign Up")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  divider: {
    marginVertical: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default LoginScreen;
