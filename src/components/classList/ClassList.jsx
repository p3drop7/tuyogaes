import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	View
} from "react-native";
import React, { useContext, useState } from "react";

import { ClassContext } from "../Context/ClassContext";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";
import { ScreenSwitchContext } from "../Context/ScreenSwitchContext";

const ClassList = () => {
	
	const {myClassList, addClass, deleteClass} = useContext(ClassContext)
	const {switchScreen} = useContext(ScreenSwitchContext)

	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	const onHandlerModal = (key) => {
		let currentItem = myClassList.filter((item) => item.key === key)[0];
		setItemSelected(currentItem);
		setModalVisible(!modalVisible);
	};

	const deleteItem = () => {
		deleteClass(itemSelected)
		setModalVisible(!modalVisible);
	};
    
	return (
		<View>
			<Button title='+' onPress={()=>{
				switchScreen()
			}}
			/>
			<Text style={styles.title}>Mis próximas clases</Text>

			<View style={styles.container}>
				{myClassList.length === 0 ? (
					<Text style={styles.emptyList}>No has agregado clases</Text>
				) : (
					<FlatList
						contentContainerStyle={styles.listContainer}
						data={myClassList}
						keyExtractor={(item) => item.key}
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
				itemSelected={itemSelected}
				modalVisible={modalVisible}
				onHandlerModal={onHandlerModal}
				deleteItem={deleteItem}
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