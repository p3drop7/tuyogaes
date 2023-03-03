import { StyleSheet, View } from 'react-native'

import AvailableClasses from '../components/AvailableClasses/AvailableClasses';
import ClassCounter from '../components/PurchaseClasses/ClassCounter';
import ProfileDisplay from '../components/ProfileDisplay/ProfileDisplay'
import React from 'react'

const ClassSelection = () => {

  return (
    
    <View style={styles.classSelection}>
      <ProfileDisplay />
      <ClassCounter />
      <AvailableClasses />
    </View>
  );
}

export default ClassSelection

const styles = StyleSheet.create({
  classSelection: {
    flex: 1,
    width: '100%',
	},
})