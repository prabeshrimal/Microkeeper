import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TimeTracking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Payslip */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payslip</Text>
        {/* Add your payslip content here */}
        {/* For example: */}
        <Button title="View Payslip" onPress={() => console.log("View Payslip")} />
      </View>

      {/* Timesheet */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Timesheet</Text>
        {/* Add your timesheet content here */}
        {/* For example: */}
        <Button title="View Timesheet" onPress={() => console.log("View Timesheet")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#ecf0f1', // Light gray background
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#34495e', // Dark blue color
  },
});

export default TimeTracking;
