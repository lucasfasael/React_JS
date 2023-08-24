import { StyleSheet, Text, View } from 'react-native';
import { Formulario } from './componentes/soma';

const style= StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

const style4 = StyleSheet.create({
  texto:{
    fontSize: 32,
    padding: 20,
  }
})
const styleForm = StyleSheet.create({
  form:{
    fontSize: 32,

  }
})

let novoTexto = "Formulário";

export default function App() {
  return (
    <View style={style.container}>

    <View > 
      <Text  style={style4.texto}>
        {novoTexto}
        </Text>
    </View> 
    
    <Text>{Formulario.texto}</Text>
    <Formulario style={styleForm.form} texto="init"></Formulario>

    </View>
  );
}

