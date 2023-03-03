import { StyleSheet, Text, View } from 'react-native'

import COLORS from '../../constants/Colors'
import React from 'react'

const ProfileDisplay = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileDisplay</Text>
    </View>
  )
}

export default ProfileDisplay

const styles = StyleSheet.create({
    container: {
        height: '30%',
        backgroundColor: COLORS.lightGreen,
        borderBottomEndRadius: 50,
    }
})