import {
	FlatList,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";

import ClassInput from "./ClassInput";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";

const NextClassList = () => {
    
	const [classList, setClassList] = useState([]);
	const [className, setClassName] = useState("");

	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	const onChangeTextHandler = (text) => {
		setClassName(text);
	};

	const onPressInputHandler = () => {
		let newClass = { title: className, id: Date.now() };
		setClassList([...classList, newClass]);
		setClassName("");
	};

	const onHandlerModal = (id) => {
		let currentItem = classList.filter((item) => item.id === id)[0];
		setItemSelected(currentItem);
		setModalVisible(!modalVisible);
	};

	const deleteItem = (id) => {
		let newClassList = classList.filter((item) => item.id !== id);
		setClassList(newClassList);
		setModalVisible(!modalVisible);
	};
    
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Mis próximas clases:</Text>

			<FlatList
				contentContainerStyle={styles.listContainer}
				data={classList}
				renderItem={(itemData) => {
					return (
						<ClassItem
							itemData={itemData}
							onHandlerModal={onHandlerModal}
						></ClassItem>
					);
				}}
				keyExtractor={(item) => item.id}
			/>

			<DeleteModal
				deleteItem={deleteItem}
				itemSelected={itemSelected}
				modalVisible={modalVisible}
				onHandlerModal={onHandlerModal}
			/>

			<ClassInput
				onChangeTextHandler={onChangeTextHandler}
				onPressInputHandler={onPressInputHandler}
				className={className}
			></ClassInput>
		</View>
	);
};

export default NextClassList

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},

	listContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: 350,
		borderColor: "black",
		borderWidth: 1,
		borderStyle: "solid",
	}
});