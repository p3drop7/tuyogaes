import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import COLORS from "../../constants/Colors";
import React from "react";
import ShadowBox from "../CustomComponents/ShadowBox";

const DailyClassItem = ({ classItem, addModalHandler }) => {
  const status = classItem.status.toUpperCase();

  return (
    <ShadowBox style={styles.classContainer}>
      <Pressable
        style={styles.classPressableContainer}
        onPress={() => {
          addModalHandler(classItem);
        }}
      >
        <Image
          source={require("../../../assets/images/anahata.png")}
          style={styles.image}
        />
        <Text style={styles.hour}>{classItem.time} hrs</Text>
        <Text style={styles.classStatus}>{status}</Text>
      </Pressable>
    </ShadowBox>
  );
};

export default DailyClassItem;

const styles = StyleSheet.create({
  classContainer: {
    width: "70%",
    marginVertical: 12,
    backgroundColor: COLORS.lightGreen,
  },

  classPressableContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },

  image: {
    height: 40,
    width: 40,
    position: "relative",
    left: -13,
  },

  hour: {
    paddingBottom: 5,
    fontFamily: "comfortaa-bold",
    fontSize: 20,
  },

  classStatus: {
    marginLeft: 20,
    fontFamily: "comfortaa",
    fontSize: 13,
    color: COLORS.darkGreen,
  },
});
