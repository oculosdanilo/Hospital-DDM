import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../img/Hospital.png')} />
      <Text style={styles.title}>Hospital Verde</Text>

      <View>

        <TouchableOpacity style={styles.btn} title="Get" onPress={() => navigation.navigate('get')}>
          <Text style={styles.text}>GET</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} title="Post" onPress={() => navigation.navigate('post')}>
          <Text style={styles.text}>POST</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} title="Put" onPress={() => navigation.navigate('put')}>
          <Text style={styles.text}>PUT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} title="Delete" onPress={() => navigation.navigate('delete')}>
          <Text style={styles.text}>DELETE</Text>
        </TouchableOpacity>


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
  title: {
    marginTop: 10,
    fontSize: 23,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginBottom: 15
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff"
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#37ff5e',
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
    width: '150px',
  },

  img: {
    width: 250,
    height: 250
  }
});
