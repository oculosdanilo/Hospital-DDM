import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import CardPaciente from "./paciente";

export default function Delete() {
  const { control, handleSubmit, formState: { errors } } = useForm({})

  function cadastrar(data) {
    console.log(data);
  }
  const Pacientes = [
    {
      nomePaciente: "Cássia",
      enderecoPaciente:"Rua da Galera",
      telefonePaciente:11254862568,
      numeroBeneficiario:125478,
      doencasPrevias:"Anemia",
      remedioDeUsoContinuo:"Vitaminas",
    },
    {
      nomePaciente: "Larissa",
      enderecoPaciente:"Rua da Loira",
      telefonePaciente:11584752695,
      numeroBeneficiario:984522,
      doencasPrevias:"Dor nos Rins",
      remedioDeUsoContinuo:"Buscopan",
    },
    {
      nomePaciente: "Leandro",
      enderecoPaciente:"Rua da Virginia",
      telefonePaciente:11584752695,
      numeroBeneficiario:8565862,
      doencasPrevias:"Dor no Pulmão",
      remedioDeUsoContinuo:"Não tem",
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes</Text>

      <View style={styles.lista}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Pacientes}
          keyExtractor={(item) => item.numeroBeneficiario}
          renderItem={({ item }) => (
            <CardPaciente
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
    justifyContent: "center"
  },
  lista: {
    flex: 1,
    width: 200
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
    alignItems: 'center',
    backgroundColor: '#37ff5e',
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
    width: '185px',
  },
});