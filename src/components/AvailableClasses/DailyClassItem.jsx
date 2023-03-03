import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import COLORS from '../../constants/Colors';
import React from 'react'
import ShadowBox from '../CustomComponents/ShadowBox'

const DailyClassItem = ({}) => {

  return (
    <ShadowBox styles={styles.classContainer}>
      <Pressable style={styles.classPressableContainer}>

        <View style={styles.hourContainer}>
          <Image
            source={require("../../../assets/images/anahata.png")}
            style={styles.image}
          />
          <Text style={styles.hour}>17hrs</Text>
        </View>

        <Text style={styles.classStatus}>Clase disponible</Text>

      </Pressable>
    </ShadowBox>
  );
}

export default DailyClassItem

const styles = StyleSheet.create({
    classContainer: {
        width: '100%',
        borderRadius: 10
    },

    classPressableContainer: {
        width: 140,
        backgroundColor: COLORS.lightGreen,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    hourContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    image: {
        height: 40,
        width: 40,
        position: 'relative',
        left: -13
    },

    hour: {
        fontFamily: 'comfortaa-bold',
        fontSize: 20
    },

    classStatus: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'comfortaa',
        fontSize: 13,
        color: COLORS.darkGreen
    }
})