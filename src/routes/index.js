import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Get from "../screen/get";
import Put from "../screen/put";
import Post from "../screen/post";
import Delete from "../screen/delete";

export default function Routes() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          options={{ headerShown: false, title: "Início" }}
          name="home"
          component={Home}
        />

        <stack.Screen
          options={{ title: "Put", headerShown: false }}
          name="put"
          component={Put}
        />

        <stack.Screen
          options={{ title: "Get", headerShown: false }}
          name="get"
          component={Get}
        />

        <stack.Screen
          options={{ title: "Delete", headerShown: false }}
          name="delete"
          component={Delete}
        />
        <stack.Screen
          options={{ title: "Post", headerShown: false }}
          name="post"
          component={Post}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
