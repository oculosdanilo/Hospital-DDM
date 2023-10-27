import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Put() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá</Text>

      <form>
        <label>
          Nº Beneficiário:
          <input type="text" name="numBeneficiario" />
        </label>

        <label>
          Nome:
          <input type="text" name="nome" />
        </label>

        <label>
          Telefone:
          <input type="text" name="telefone" />
        </label>

        <label>
          Endereço:
          <input type="text" name="endereco" />
        </label>

        <label>
          Remédio de Uso Contínuo:
          <input type="text" name="medioDeUsoContinuo" />
        </label>

        <label>
          Doenças Prévias:
          <input type="text" name="doencasPrevias" />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center",
  },

  text: {
    color: "#ffffff",
  },
});
