import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const DeleteModal = ({deleteItem, itemSelected, modalVisible, onHandlerModal}) => {
  return (
		<Modal animationType="slide" visible={modalVisible}>
			<View style={styles.modalContainer1}>
				<View style={styles.modalContainer2}>
					<Text style={styles.modalText}>¿Deseas cancelar esta clase?</Text>

					<Pressable style={styles.confirmPressable}
						onPress={() => {
							deleteItem(itemSelected.id);
						}}
					>
						<Text style={styles.modalConfirmPressableText} >Confirmar</Text>
					</Pressable>

					<Pressable style={styles.returnPressable}
						onPress={() => {
							onHandlerModal();
						}}
					>
						<Text style={styles.modalReturnPressableText}>Salir</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

export default DeleteModal

const styles = StyleSheet.create({
	modalContainer1: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},

	modalContainer2: {
		width: 320,
		height: '40%',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: '#008245',
		backgroundColor: '#E9FFDF',
	},

	modalText: {
		fontWeight: 'bold',
		fontSize: 18,
		marginVertical: 10
	},

	confirmPressable: {
		height: 55,
		width: 120,
		backgroundColor: '#F49E9E',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 10,
	},

	modalConfirmPressableText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},

	returnPressable: {
		height: 55,
		width: 120,
		backgroundColor: '#DADADA',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 10,
	},

	modalReturnPressableText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	}
})