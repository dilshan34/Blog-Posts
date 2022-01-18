import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from '../screens/IndexScreen'
const Stack = createStackNavigator();

import React from "react";
import { View, Text } from "react-native";

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IndexScreen"
        component={IndexScreen}
        // options={{ headerShown: false }}
      />

      {/* <Stack.Screen
      name="ResultShow"
      component={ResultShow}
      // options={{ headerShown: false }}
    /> */}
    </Stack.Navigator>
  );
}
