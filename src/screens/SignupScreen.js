import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

const SignupScreen = () => {
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

export default SignupScreen;
