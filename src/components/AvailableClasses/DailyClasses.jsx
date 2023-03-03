import { StyleSheet, Text, View } from "react-native";

import DailyClassItem from "./DailyClassItem";
import React from "react";

const DailyClasses = ({ daySelected }) => {
 console.log(daySelected)
  const getMonth = (monthNum) => {
    let months = {
      1: "Enero",
      2: "Febrero",
      3: "Marzo",
      4: "Abril",
      5: "Mayo",
      6: "Junio",
      7: "Julio",
      8: "Agosto",
      9: "Septiembre",
      10: "Octubre",
      11: "Noviembre",
      12: "Diciembre",
    };
    return months[monthNum];
  };

  const date = daySelected[0]
  const month = getMonth(date.month);

  return (
    <View style={styles.dailyClassesContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{month}</Text>
        <Text style={styles.dateText}> {date.day}</Text>
      </View>

      <Text style={styles.selectText}>Selecciona una clase:</Text>

      <View style={styles.classItemsContainer}>
        <View style={styles.classItemsContainer2}>
          <DailyClassItem daySelected={daySelected} />
          <DailyClassItem daySelected={daySelected} />
        </View>
        <View style={styles.classItemsContainer2}>
          <DailyClassItem daySelected={daySelected} />
          <DailyClassItem daySelected={daySelected} />
        </View>
      </View>
    </View>
  );
};

export default DailyClasses;

const styles = StyleSheet.create({
    dailyClassesContainer: {
        width: '100%',
        alignItems: 'center',
    },

    dateContainer: {
        width: '80%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    
    dateText: {
        fontFamily: 'comfortaa-bold',
        fontSize: 20
    },

    selectText: {
        fontFamily: 'comfortaa-bold',
        fontSize: 15
    },

    classItemsContainer: {
        width: '100%',
    },

    classItemsContainer2: {
        paddingVertical: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});
