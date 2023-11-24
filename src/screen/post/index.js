import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { _post } from "../../API/post";

export default function Post() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [remedio, setRemedio] = useState("");
  const [doencas, setDoencas] = useState("");
  const [benef, setBenef] = useState();

  async function addPaciente() {
    const paciente = {
      nomePaciente: nome,
      senhaPaciente: senha,
      enderecoPaciente: endereco,
      telefonePaciente: telefone,
      numeroBeneficiario: benef,
      doencasPrevias: doencas,
      remedioDeUsoContinuo: remedio,
    };
    console.log(await _post(paciente));
    setNome("");
    setBenef("");
    setDoencas("");
    setEndereco("");
    setRemedio("");
    setSenha("");
    setTelefone("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nº Beneficiário"
        value={benef}
        onChangeText={(texto) => setBenef(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={(texto) => setNome(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
      />

      <TextInput
        style={styles.input}
        value={telefone}
        placeholder="Telefone"
        onChangeText={(texto) => setTelefone(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={(texto) => setEndereco(texto)}
      />

      <TextInput
        style={styles.input}
        value={remedio}
        placeholder="Remédio de Uso Contínuo"
        onChangeText={(texto) => setRemedio(texto)}
      />

      <TextInput
        style={styles.input}
        value={doencas}
        placeholder="Doenças Prévias"
        onChangeText={(texto) => setDoencas(texto)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (
            nome != "" &&
            senha != "" &&
            telefone != "" &&
            endereco != "" &&
            remedio != "" &&
            doencas != "" &&
            benef != 0
          ) {
            addPaciente();
          } else {
            alert("dados faltantes!");
          }
        }}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>
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
  title: {
    marginTop: 10,
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
