import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Get from "../screen/get";
import Put from "../screen/put";
import Post from "../screen/post";
import Delete from "../screen/Delete";

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
              backgroundColor: '#50C878'
            },
            headerTintColor: '#fff'
          }}
        />

        <stack.Screen
          name="put"
          component={Put}
          options={{
            headerStyle: {
              backgroundColor: '#50C878'
            },
            headerTintColor: '#fff'
          }}
        />

        <stack.Screen
          name="get"
          component={Get}
          options={{
            headerStyle: {
              backgroundColor: '#50C878'
            },
            headerTintColor: '#fff'
          }}
        />

        <stack.Screen
          name="delete"
          component={Delete}
          options={{
            headerStyle: {
              backgroundColor: '#50C878'
            },
            headerTintColor: '#fff'
          }}
        />
        <stack.Screen
          name="post"
          component={Post}
          options={{
            headerStyle: {
              backgroundColor: '#50C878'
            },
            headerTintColor: '#fff'
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
