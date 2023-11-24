import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CardPaciente from "../../components/paciente";
import { _get } from "../../API/get";

export default function Get() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    async function pegarPacientes() {
      const dados = await _get();
      setPacientes(dados);
    }

    pegarPacientes();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes</Text>

      <View style={styles.lista}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={pacientes}
          keyExtractor={(item) => item.numeroBeneficiario}
          renderItem={({ item }) => (
            <CardPaciente
              id={item.id}
              nomePaciente={item.nomePaciente}
              enderecoPaciente={item.enderecoPaciente}
              telefonePaciente={item.telefonePaciente}
              numeroBeneficiario={item.numeroBeneficiario}
              doencasPrevias={item.doencasPrevias}
              remedioDeUsoContinuo={item.remedioDeUsoContinuo}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  lista: {
    flex: 1,
    width: 200,
  },
  title: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 23,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#37ff5e",
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
    width: "185px",
  },
});
