import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  createNativeStackNavigator,
} from "@react-navigation/bottom-tabs";

import HomeScreen from "~/screens/HomeScreen";
import AccountScreen from "~/screens/AccountScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Tokens" }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{ title: "Account" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
