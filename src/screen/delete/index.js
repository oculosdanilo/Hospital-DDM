import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Delete() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deletar Paciente</Text>

      <form>
        <label style={styles.text}>
          Número Beneficiário:
          <input type="text" name="numBeneficiario" />
        </label>
        <input type="submit" value="Deletar" />
      </form>
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
