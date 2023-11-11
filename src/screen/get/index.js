import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";


export default function Get() {

  const routes = useRoute();
  const navigation = useNavigation();

return (
<View style={styles.container}>
  <Text style={styles.text}> Paciente</Text>


</View>
);
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131e4a",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

