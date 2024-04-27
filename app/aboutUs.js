
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Microkeeper</Text>
      <Text style={styles.content}>
        Microkeeper is a comprehensive time tracking and payroll management application designed to streamline the process of managing employee hours, payslips, and timesheets.
        {"\n\n"}
        With Microkeeper, businesses can easily track employee work hours through clock in/out functionality, ensuring accurate recording of attendance and working hours.
        {"\n\n"}
        The timesheet feature allows employers to view and manage employee work hours for specific time periods, facilitating efficient scheduling and resource management.
        {"\n\n"}
        Additionally, Microkeeper simplifies payroll management by generating detailed payslips that outline earnings, deductions, and net pay for each employee, ensuring compliance with payroll regulations and accurate compensation.
        {"\n\n"}
        Whether you're a small business owner or a large enterprise, Microkeeper offers the tools and functionality to streamline your time tracking and payroll processes, allowing you to focus on what matters most – growing your business.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ecf0f1", // Light gray background
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#34495e", // Dark blue color
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    color: "#34495e", // Dark blue color
  },
});

export default AboutUs;
