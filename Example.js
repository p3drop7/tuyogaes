import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Example() {

    const [textOnScreen, setTextOnScreen] = useState('')

    const onChangeHandler = (text) => {
    setTextOnScreen(text)
    }

  return (
    <View style={styles.container}>
        <Text>Hola, Coder!</Text>
        <Text style={styles.texto}>Escribe aquí tu nombre:</Text>
        <TextInput id='textInput' placeholder='Escribe aquí' style={styles.inputBox} onChangeText={onChangeHandler} value={textOnScreen}></TextInput>
        <Button title='Ingresar'/>
        <Text>{textOnScreen}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        color: 'red'
    },

    inputBox: {
      backgroundColor: 'magenta',
      color: 'black',
      padding: 5,
      paddingLeft: 10,
      width: '100%',
      textAlign: 'center',
      marginVertical: 10,
    }
})