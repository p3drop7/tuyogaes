import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function NextClassList() {

    const [classList, setClassList] = useState([
        {title: 'clase1', id: 1},
        {title: 'clase2', id: 2},
        {title: 'clase3', id: 3}
        ])

    const [className, setClassName] = useState('')

    const onChangeTextHandler=(text)=>{
        setClassName(text)
    }

    const onPressInputHandler =()=>{
        let newClass = {
            title: className,
            id: Date.now()
        }

        setClassList([...classList, newClass])
        setClassName('')
    }

    const deleteHandler =()=>{
        
    }
    
  return (
    
    <View style={ styles.container } >

        <Text style={ styles.title }>
            Mis próximas clases:
        </Text>

        <FlatList
            contentContainerStyle={ styles.listContainer }
            data={classList}
            renderItem={ (itemData) => {
                return(
                    <Pressable style={ styles.listItem }>
                        <Text style={ styles.itemText }>
                            {itemData.item.title}
                        </Text>
                    </Pressable>
                ) 
            }}
            keyExtractor={ item => item.id }
        />

        <View style={ styles.inputContainer }>
            <TextInput 
                style={ styles.input }
                placeholder='Escribe el nombre de la clase'
                onChangeText={onChangeTextHandler}
                value={className}
            ></TextInput>
            <Button title='agregar' onPress={onPressInputHandler} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },

    listContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    },

    listItem: {
        width: 350,
        padding: 20,
        margin: 10,
        backgroundColor: '#E9FFDF',
        borderColor: '#008245',
        borderWidth: 2,
        borderStyle: 'solid'
    },

    itemText: {
        fontSize: 20,
    },

    inputContainer: {
        marginVertical: 40
    },

    input: {
        marginVertical: 30,
        padding: 15,
        width: 300,
        backgroundColor: 'gray'
    }
})