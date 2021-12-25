import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from "~/context/AuthContext";

import HomeScreen from "~/screens/HomeScreen";
import AccountScreen from "~/screens/AccountScreen";
import LoginScreen from "~/screens/LoginScreen";
import SignupScreen from "~/screens/SignupScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const { state } = React.useContext(AuthContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {state.token ? (
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
              name="Sign Up"
              component={SignupScreen}
              options={{ title: "Sign Up" }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Log In" }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
