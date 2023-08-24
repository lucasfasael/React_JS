import { View } from "react-native-web"
import React from "react";
import {Text, TextInput, Button, Alert} from 'react-native';
import "./soma.css"

export function Soma ({n1, n2}){
    return(
        <Text>
            {n1 + n2}
        </Text>
    );
}

export function Formulario({variavel}){

    const [texto, setText] = React.useState(variavel)

    return (
        <View>
            
            <Text>
                Digite:
            </Text>
            <TextInput onChangeText={setText} value={texto} placeholder="Usuario"/>
            <Button onPress={Alert.alert({texto})} title="ENVIAR" value="enviar"></Button>
        </View>
    );
}