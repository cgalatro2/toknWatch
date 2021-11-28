import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const AccountScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <View>
        <Text style={{ fontSize: 48 }}>Account Scrizzy</Text>
      </View>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
