import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardPaciente({
  id,
  nomePaciente,
  enderecoPaciente,
  telefonePaciente,
  numeroBeneficiario,
  doencasPrevias,
  remedioDeUsoContinuo,
}) {
  return (
    <View style={styles.containerPaciente}>
      <Text style={styles.titulo}>ID: {id}</Text>
      <Text style={styles.titulo}>Nome: {nomePaciente}</Text>
      <Text style={styles.titulo}>Endereço: {enderecoPaciente}</Text>
      <Text style={styles.titulo}>Telefone: {telefonePaciente}</Text>
      <Text style={styles.titulo}>Nº Beneficiário: {numeroBeneficiario}</Text>
      <Text style={styles.titulo}>Doenças Prévias: {doencasPrevias}</Text>
      <Text style={styles.titulo}>
        Remédio Continuo: {remedioDeUsoContinuo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPaciente: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingLeft: 16,
    borderWidth: 3,
    borderColor: "#50c878",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    marginBottom: 20,
    marginTop: 20,
  },
  titulo: {
    fontSize: 13,
    paddingTop: 8,
    paddingBottom: 4,
  },
});
