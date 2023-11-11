import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";


export default function Get() {

  const routes = useRoute();
  const navigation = useNavigation();

return (
<View style={styles.container}>
  <Text style={styles.title}> Paciente</Text>


</View>
);
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  title: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 23,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});

