import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";


export default function Get() {

  const routes = useRoute();
  const navigation = useNavigation();

return (
<View style={styles.container}>
  <Text style={styles.text}>Deletar Paciente</Text>


</View>
);
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center"
  },

  text: {
    color: "#ffffff"
  }
});


