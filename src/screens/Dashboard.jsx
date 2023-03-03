import { StyleSheet, View } from 'react-native'

import ClassList from "../components/ClassList/ClassList";
import ProfileDisplay from "../components/ProfileDisplay/ProfileDisplay";
import React from "react";

const Dashboard = () => {
	return (
		<View style={styles.dashboard}>
			<ProfileDisplay />
			<ClassList />
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	dashboard: {
    flex: 1,
    width: '100%'
	},
});