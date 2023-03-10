import { Pressable, StyleSheet, Text, View } from "react-native";

import AddModal from "./AddModal";
import { ClassContext } from "../Context/ClassContext";
import DailyClassItem from "./DailyClassItem";
import React from "react";

const DailyClasses = ({ daySelected, goBack }) => {

  const {addClass} = React.useContext(ClassContext);

  const [itemAdd, setItemAdd] = React.useState({});
	const [addModalVisible, setAddModalVisible] = React.useState(false);

  const addModalHandler =(classItem)=>{
    setItemAdd(classItem)
    setAddModalVisible(!addModalVisible)
  }

  const addClassModal =(itemAdd)=>{
    addClass(itemAdd)
    setItemAdd({})
    setAddModalVisible(!addModalVisible)
  }


  const month = daySelected[0].monthName;
  const day = daySelected[0].day;

  return (
    <View style={styles.dailyClassesContainer}>
      <View style={styles.dateContainer1}>
        <Pressable
          style={styles.goBackPressable}
          onPress={() => {
            goBack();
          }}
        >
          <Text style={styles.goBackText}>Volver </Text>
        </Pressable>
        <View style={styles.dateContainer2}>
          <Text style={styles.dateText}>{month}</Text>
          <Text style={styles.dateText}> {day}</Text>
        </View>
      </View>

      <Text style={styles.selectText}>Selecciona una clase:</Text>

      <View style={styles.classItemsContainer}>
        {daySelected.map((item) => {
          return (
            <DailyClassItem
              classItem={item}
              addModalHandler={addModalHandler}
              key={item.key}
            />
          );
        })}
      </View>

      <AddModal
        addModalHandler={addModalHandler}
        addClassModal={addClassModal}
        itemAdd={itemAdd}
        addModalVisible={addModalVisible}
      />
    </View>
  );
};

export default DailyClasses;

const styles = StyleSheet.create({
  dailyClassesContainer: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },

  dateContainer1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  dateContainer2: {
    flexDirection: "row",
    justifyContent: "center",
  },

  goBackText: {
    fontFamily: "comfortaa",
    fontSize: 20,
    color: "gray",
  },

  dateText: {
    fontFamily: "comfortaa-bold",
    fontSize: 20,
  },

  selectText: {
    marginTop: 10,
    fontFamily: "comfortaa-bold",
    fontSize: 15,
  },

  classItemsContainer: {
    width: "100%",
    alignItems: "center",
  },
});
