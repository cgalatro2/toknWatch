import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as authProvider } from "~/context/AuthContext";

import HomeScreen from "~/screens/HomeScreen";
import AccountScreen from "~/screens/AccountScreen";
import LoginScreen from "~/screens/LoginScreen";
import SignupScreen from "~/screens/SignupScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const isLoggedIn = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? (
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
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Log In" }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignupScreen}
              options={{ title: "Sign Up" }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
