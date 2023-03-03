import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import ClassSelection from './screens/ClassSelection';
import Dashboard from './screens/Dashboard';

const Index = () => {
	
	const [screen, setScreen] = useState(1)
	
	const switchScreen =()=>{
		screen === 1 && setScreen(2)
		screen === 2 && setScreen(1)
	}

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss();
				}}
			>
				<View style={styles.screen}>
					{
						screen === 1 
							? <Dashboard switchScreen={switchScreen}/> 
							: <ClassSelection switchScreen={switchScreen}/>
					}
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