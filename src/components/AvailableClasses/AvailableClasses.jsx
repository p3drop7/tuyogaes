import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ClassCalendar from './ClassCalendar'
import DailyClasses from './DailyClasses'

const AvailableClasses = () => {
  const [calendarSwitch, setCalendarSwitch] = useState(false)
  const [daySelected, setDaySelected] = useState([])
  const [availableClasses, setAvailableClasses] = useState([
    "2023-03-06",
    "2023-03-07",
    "2023-03-08",
    "2023-03-09",
    "2023-03-13"
  ]);

  const selectDay=(day)=>{
    let currentDay = [day]
    setDaySelected(currentDay)
    availableClasses.find(item => item === day.dateString) && setCalendarSwitch(!calendarSwitch)   
  }

  return (
    <View>
      {
        calendarSwitch === false 
        ? <ClassCalendar availableClasses={availableClasses} selectDay={selectDay} />
        : <DailyClasses daySelected={daySelected} />
      }
    </View>
  )
}

export default AvailableClasses

const styles = StyleSheet.create({})