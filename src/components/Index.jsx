import { SafeAreaView, StyleSheet, View } from 'react-native'

import NextClassList from './classList/NextClassList';
import React from 'react'

const Index = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screen}>
        
        <NextClassList></NextClassList>
        
      </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: '8%'
      },
    
      screen:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
})