import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import Dashboard from './screens/Dashboard';
import React from 'react'

const Index = () => {
	
	return (
		<SafeAreaView style={styles.safeAreaView}>
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss();
				}}
			>
				<View style={styles.screen}>
					<Dashboard />
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}

export default Index

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
		paddingTop: '6%',
	},
    
	screen:{
		flex: 1,
        alignItems: 'center',
      }
})