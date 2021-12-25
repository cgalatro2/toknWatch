import React from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";

import App from "./App";

const toknWatch = () => <App />;

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(toknWatch);
