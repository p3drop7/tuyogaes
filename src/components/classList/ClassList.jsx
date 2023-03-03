import {
	FlatList,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useState } from "react";
import ClassInput from "./ClassInput";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";

const ClassList = () => {
    
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
		<View>
			<Text style={styles.title}>Mis próximas clases</Text>

			<View style={styles.container}>
				{classList.length === 0 ? (
					<Text style={styles.emptyList}>No has agregado clases</Text>
				) : (
					<FlatList
						contentContainerStyle={styles.listContainer}
						data={classList}
						keyExtractor={(item) => item.id}
						renderItem={(itemData) => {
							return (
								<ClassItem
									itemData={itemData}
									onHandlerModal={onHandlerModal}
								/>
							);
						}}
					/>
				)}
			</View>

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
			/>
		</View>
	);
};

export default ClassList

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},

	emptyList: {
		marginVertical: 100,
		color: 'gray'
	},

	title: {
		marginTop: 20,
		fontSize: 25,
		textAlign: "center",
		fontFamily: 'comfortaa-bold'
	},

	listContainer: {
		width: 350,
		alignItems: "center",
	},
});