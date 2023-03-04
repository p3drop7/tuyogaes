import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import AvailableClassContextProvider from './components/Context/AvailableClassContext';
import ClassContextProvider from './components/Context/ClassContext';
import ClassSelection from './screens/ClassSelection';
import Dashboard from './screens/Dashboard';
import React from 'react'
import { ScreenSwitchContext } from './components/Context/ScreenSwitchContext';

const Index = () => {

  const {screen} = React.useContext(ScreenSwitchContext)
  
	return (
    <SafeAreaView style={styles.safeAreaView}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <ClassContextProvider>
            <AvailableClassContextProvider>
              {screen === 1 ? <Dashboard /> : <ClassSelection />}
            </AvailableClassContextProvider>
          </ClassContextProvider>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Index

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
	},
    
	screen:{
		flex: 1,
        alignItems: 'center',
      }
})