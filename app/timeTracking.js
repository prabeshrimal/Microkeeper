import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TimeTracking = () => {
  const navigation = useNavigation();
  const [showPayslip, setShowPayslip] = useState(false);
  const [showTimesheet, setShowTimesheet] = useState(false);

  return (
    <View style={styles.container}>
      {/* Payslip */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payslip</Text>
        {showPayslip && (
          <View style={styles.payslipContainer}>
            <View style={styles.payslipHeader}>
              <Text style={styles.payslipHeaderText}>
                -------------------------------------------------------------------
                {"\n"}
                | Employee Name: John Smith              Pay Period: 01/04/2024 - 14/04/2024 |
                {"\n"}
                -------------------------------------------------------------------
              </Text>
            </View>
            <View style={styles.tableContainer}>
              <Text style={styles.tableHeader}>Earnings</Text>
              <Text style={styles.tableHeader}>Hours/Rate</Text>
              <Text style={styles.tableHeader}>Amount</Text>

              {/* Add your earnings data here */}
              {/* For example: */}
              <Text>Regular Hours Worked</Text>
              <Text>80 hours @ $25</Text>
              <Text>$2,000.00</Text>

              {/* Add other earnings data similarly */}

              {/* Add deductions section */}
              <Text style={styles.tableHeader}>Deductions</Text>
              {/* Add deductions data similarly */}

              {/* Add net pay section */}
              <Text style={styles.tableHeader}>Net Pay</Text>
              {/* Add net pay data similarly */}

              {/* Add superannuation contribution section */}
              <Text style={styles.tableHeader}>Superannuation Contribution</Text>
              {/* Add superannuation contribution data similarly */}
            </View>
          </View>
        )}
        <Button
          title="View Payslip"
          onPress={() => setShowPayslip(!showPayslip)}
        />
      </View>

      {/* Timesheet */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Timesheet</Text>
        {showTimesheet && (
          <View style={styles.timesheetContainer}>
            <Text style={styles.timesheetHeader}>
              -------------------------------------------------------------------
              {"\n"}
              | Date        | Day      | Start Time | End Time   | Hours Worked |
              {"\n"}
              -------------------------------------------------------------------
              {"\n"}
              | 01/04/2024 | Monday   | 09:00 AM   | 05:00 PM   | 8           |
              {"\n"}
              | 02/04/2024 | Tuesday  | 09:00 AM   | 05:00 PM   | 8           |
              {"\n"}
              {/* Add other timesheet data similarly */}
              -------------------------------------------------------------------
              {"\n"}
              | Total Hours Worked:                                         | 80 |
              {"\n"}
              -------------------------------------------------------------------
            </Text>
          </View>
        )}
        <Button
          title="View Timesheet"
          onPress={() => setShowTimesheet(!showTimesheet)}
        />
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
    backgroundColor: "#ecf0f1", // Light gray background
  },
  section: {
    marginBottom: 20,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#34495e", // Dark blue color
  },
  payslipContainer: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  payslipHeader: {
    marginBottom: 10,
  },
  payslipHeaderText: {
    fontSize: 16,
  },
  tableContainer: {
    marginBottom: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timesheetContainer: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  timesheetHeader: {
    fontSize: 16,
  },
});

export default TimeTracking;
