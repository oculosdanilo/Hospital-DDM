import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardPaciente({ nomePaciente, enderecoPaciente, telefonePaciente, numeroBeneficiario, doencasPrevias, remedioDeUsoContinuo }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
      onPress={() =>
        navigation.navigate("put", {
            nomePaciente: nomePaciente,
            enderecoPaciente:enderecoPaciente,
            telefonePaciente:telefonePaciente,
            numeroBeneficiario:numeroBeneficiario,
            doencasPrevias:doencasPrevias,
            remedioDeUsoContinuo:remedioDeUsoContinuo,
        })
      }
      style={styles.containerPaciente}
    >
      <Text style={styles.titulo}>Nome: {nomePaciente}</Text>
            <Text style={styles.titulo}>Endereço: {enderecoPaciente}</Text>
            <Text style={styles.titulo}>Telefone: {telefonePaciente}</Text>
            <Text style={styles.titulo}>Nº Beneficiário: {numeroBeneficiario}</Text>
            <Text style={styles.titulo}>Doenças Prévias: {doencasPrevias}</Text>
            <Text style={styles.titulo}>Remédio Continuo: {remedioDeUsoContinuo}</Text>
    </TouchableOpacity>

        
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
        marginBottom:20,
        marginTop: 20
    },
    titulo: {
        fontSize: 13,
        paddingTop: 8,
        paddingBottom: 4,
    },
});