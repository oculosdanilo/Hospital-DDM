import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./style";


export default function Delete() {

return (
<View style={styles.container}>
  <Text style={styles.text}>Deletar Paciente</Text>

  <form>
  <label>
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
    backgroundColor: "#141a29",
    alignItems: "center"
  },

  text: {
    color: "#ffffff"
  }
});
