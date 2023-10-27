import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function App() {

const routes = useRoute();
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá</Text>

      <View>
        <Text style={styles.text}>Deletar Paciente</Text>
        <TouchableOpacity style={styles.botao} title="Delete" onPress={() => navigation.navigate('Delete')}>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Put Paciente</Text>
        <TouchableOpacity style={styles.botao} title="Put">
          <Text style={styles.text}>Put</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Post Paciente</Text>
        <TouchableOpacity style={styles.botao} title="Post">
          <Text style={styles.text}>Post</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Get Paciente</Text>
        <TouchableOpacity style={styles.botao} title="Get">
          <Text style={styles.text}>Get</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center",
    flexDirection: "column",
  },

  botao: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginBottom: 25
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
