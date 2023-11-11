import { TouchableOpacity, StyleSheet, Text, View, TextInput } from "react-native";
import { useForm, Controller } from 'react-hook-form';

export default function Post() {

  const { control, handleSubmit, formState: { errors } } = useForm({})

  function cadastrar(data) {
    console.log(data);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Cadastrar</Text>  

<Controller
        control={control}
        name="numeroBeneficiario"
        render={({ field: { onChange, onBlur, value } }) =>
          <TextInput
          style={styles.input}
            onChangeText={onChange}
            onBlue={onBlur} // chamado quando o text input é tocado
            value={value}
            placeholder="Digite o Nº Beneficiário"
          />
        }
      />

<Controller
        control={control}
        name="pacienteNome"
        render={({ field: { onChange, onBlur, value } }) =>
          <TextInput
          style={styles.input}
            onChangeText={onChange}
            onBlue={onBlur} // chamado quando o text input é tocado
            value={value}
            placeholder=" Nome Completo"
          />
        }
      />

<Controller
        control={control}
        name="telefonePaciente"
        render={({ field: { onChange, onBlur, value } }) =>
          <TextInput
          style={styles.input}
            onChangeText={onChange}
            onBlue={onBlur} // chamado quando o text input é tocado
            value={value}
            placeholder="Telefone"
          />
        }
      />

<Controller
        control={control}
        name="enderecoPaciente"
        render={({ field: { onChange, onBlur, value } }) =>
          <TextInput
          style={styles.input}
            onChangeText={onChange}
            onBlue={onBlur} // chamado quando o text input é tocado
            value={value}
            placeholder="Endereço"
          />
        }
      />

<Controller
        control={control}
        name="remedioDeUsoContinuo"
        render={({ field: { onChange, onBlur, value } }) =>
          <TextInput
          style={styles.input}
            onChangeText={onChange}
            onBlue={onBlur} // chamado quando o text input é tocado
            value={value}
            placeholder="Remédio de Uso Contínuo"
          />
        }
      />

<Controller
        control={control}
        name="doencasPrevias"
        render={({ field: { onChange, onBlur, value } }) =>
          <TextInput
          style={styles.input}
            onChangeText={onChange}
            onBlue={onBlur} // chamado quando o text input é tocado
            value={value}
            placeholder="Doenças Prévias"
          />
        }
      />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit(cadastrar)}>
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
    justifyContent: "center"
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
    alignItems: 'center',
    backgroundColor: '#37ff5e',
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
    width: '185px',
  },
});