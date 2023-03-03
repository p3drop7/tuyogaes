import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import COLORS from "../../constants/Colors";

const ClassCounter = () => {
  const [classCounter, setClassCounter] = useState(3);

  return (
    <View style={styles.classCounterContainer}>

      <Text style={styles.classCounterText}>
        Tienes {classCounter} clases disponibles
      </Text>
      
      <Pressable style={styles.classCounterButton}>
        <Text style={styles.classCounterButtonText}>
            Adquirir más clases
        </Text>
      </Pressable>

    </View>
  );
};

export default ClassCounter;

const styles = StyleSheet.create({
  classCounterContainer: {
    width: "90%",
    paddingVertical: 10,
    marginVertical: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGreen,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: COLORS.darkGreen,
    borderRadius: 10,
  },

  classCounterText: {
    fontFamily: "comfortaa-bold",
    fontSize: 20,
  },

  classCounterButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    margin: 10,
    backgroundColor: COLORS.darkGreen,
    borderRadius: 10,
  },

  classCounterButtonText: {
    fontFamily: "comfortaa-bold",
    fontSize: 17,
    color: "white",
  },
});
