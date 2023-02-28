import { Button, Modal, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const DeleteModal = ({deleteItem, itemSelected, modalVisible, onHandlerModal}) => {
  return (
		<Modal animationType="slide" visible={modalVisible}>
			<Text>¿Deseas cancelar esta clase?</Text>
			<View>
				<Button
					title="Confirmar"
					onPress={() => {
						deleteItem(itemSelected.id);
					}}
				></Button>
				<Button
					title="Salir"
					onPress={() => {
						onHandlerModal();
					}}
				></Button>
			</View>
		</Modal>
	);
}

export default DeleteModal

const styles = StyleSheet.create({})