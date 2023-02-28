import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'

const ClassInput = ({
	onChangeTextHandler,
	onPressInputHandler,
	className
}) => {
    
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="Escribe el nombre de la clase"
				onChangeText={(text) => {
					onChangeTextHandler(text);
				}}
				value={className}
			></TextInput>
			<Button
				title="agregar"
				onPress={() => {
					onPressInputHandler();
				}}
			/>
		</View>
	);
};

export default ClassInput

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 40,
	},

	input: {
		marginVertical: 30,
		padding: 15,
		width: 300,
		backgroundColor: "gray",
	}
});