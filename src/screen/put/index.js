import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Put() {
  return (
    <View style={styles.container}>

      <form style={styles.text}>
        <label>
          Nº Beneficiário:
          <input type="text" name="numBeneficiario" />
        </label>
<br></br><br></br>

        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <br></br>
        <br></br>

        <label>
          Telefone:
          <input type="text" name="telefone" />
        </label>
        <br></br>
        <br></br>

        <label>
          Endereço:
          <input type="text" name="endereco" />
        </label>
        <br></br>
        <br></br>

        <label>
          Remédio de Uso Contínuo:
          <input type="text" name="medioDeUsoContinuo" />
        </label>
        <br></br>
        <br></br>

        <label>
          Doenças Prévias:
          <input type="text" name="doencasPrevias" />
        </label>
        <br></br>
        <br></br>

        <input type="submit" value="Enviar" />
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
    color: "white",
  },
});