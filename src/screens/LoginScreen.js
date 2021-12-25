import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign Up" />
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
