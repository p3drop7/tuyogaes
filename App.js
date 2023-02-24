import { Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react'
import { useState } from 'react'
import NextClassList from './NextClassList';

export default function App() {

  

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screen}>
        
        <NextClassList></NextClassList>
        
      </View>
    </SafeAreaView>
  );
}

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