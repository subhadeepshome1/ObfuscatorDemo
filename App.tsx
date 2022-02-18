import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./src/dashboard";
import Destination1 from "./src/place1";
import Destination2 from "./src/place2";
import Destination3 from "./src/place3";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent: true, headerTitleStyle: {display: 'none'}, headerShown: false}}>
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="destination1" component={Destination1} />
        <Stack.Screen name="destination2" component={Destination2} />
        <Stack.Screen name="destination3" component={Destination3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}