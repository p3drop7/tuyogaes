import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";

const ClassItem = ({ itemData, onHandlerModal }) => {
	return (
		<View style={styles.itemContainer}>
			<Image source={require("./anahata.png")} style={styles.itemImage} />
			<View style={styles.itemDescription}>
				<Text style={styles.itemText}>{itemData.item.title}</Text>
				<Pressable
					style={styles.cancelButton}
					onPress={() => {
						onHandlerModal(itemData.item.id);
					}}
				>
					<Text style={styles.cancelButtonText}>Cancelar</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default ClassItem;

const styles = StyleSheet.create({
	itemContainer: {
		width: 350,
		margin: 10,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "#E9FFDF",
		borderColor: "#008245",
		borderWidth: 2,
		borderStyle: "solid",
	},

	itemImage: {
		height: 50,
		width: 50,
	},

	itemDescription: {
		minWidth: 230,
		alignItems: "center",
	},

	itemText: {
		fontWeight: "bold",
		fontSize: 20,
	},

	cancelButton: {
		height: 35,
		width: 80,
		marginTop: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F49E9E",
		borderStyle: "solid",
		borderRadius: 5,
		overflow: "hidden",
	},

	cancelButtonText: {
		color: "white",
		fontWeight: "bold",
	},
});