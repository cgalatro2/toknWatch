import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Text style={{ fontSize: 48 }}>Account Scrizzy</Text>
      <Button title="Logout" onPress={logout} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
