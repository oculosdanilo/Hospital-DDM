import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Métodos HTTP</Text>

      <View>
      <Button title="Get" onPress={ () => navigation.navigate('get')}>
        </Button>
        <Button title="Post" onPress={ () => navigation.navigate('post')}>
        </Button>
        <Button title="Put" onPress={ () => navigation.navigate('put')}>
        </Button>
        <Button title="Delete" onPress={ () => navigation.navigate('delete')}>
        </Button>
              
      </View>
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
