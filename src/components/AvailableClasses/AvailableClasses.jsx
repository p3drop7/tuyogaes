import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import { AvailableClassContext } from "../Context/AvailableClassContext";
import ClassCalendar from "./ClassCalendar";
import DailyClasses from "./DailyClasses";

const AvailableClasses = () => {
  const availableClasses = useContext(AvailableClassContext);

  const [daySelected, setDaySelected] = useState([]);
  const [calendarSwitch, setCalendarSwitch] = useState(false);

  const selectDay = (day) => {
    let currentDayClasses = availableClasses.filter(
      (item) => item.dateString === day.dateString
    );
    setDaySelected(currentDayClasses);

    let available = availableClasses.find(
      (item) => item.dateString === day.dateString
    );
    available && setCalendarSwitch(!calendarSwitch);
  };

  const goBack = () => {
    setCalendarSwitch(!calendarSwitch);
    setDaySelected([]);
  };

  return (
    <View>
      {!calendarSwitch ? (
        <ClassCalendar
          availableClasses={availableClasses}
          selectDay={selectDay}
        />
      ) : (
        <DailyClasses daySelected={daySelected} goBack={goBack} />
      )}
    </View>
  );
};

export default AvailableClasses;

const styles = StyleSheet.create({});
