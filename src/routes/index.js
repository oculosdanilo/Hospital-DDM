import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/home";
import Get from "../screen/get";
import Post from "../screen/post";

export default function Routes() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#50C878",
            },
            headerTintColor: "#fff",
          }}
        />

        <stack.Screen
          name="get"
          component={Get}
          options={{
            headerStyle: {
              backgroundColor: "#50C878",
            },
            headerTintColor: "#fff",
          }}
        />

        <stack.Screen
          name="post"
          component={Post}
          options={{
            headerStyle: {
              backgroundColor: "#50C878",
            },
            headerTintColor: "#fff",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
