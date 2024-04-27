import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Home = () => {
  const [clockedIn, setClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);

  const handleClockIn = () => {
    setClockedIn(true);
    setClockInTime(new Date());
  };

  const handleClockOut = () => {
    setClockedIn(false);
    setClockOutTime(new Date());
  };

  const handleAdditionalFeature = () => {
    console.log("Additional Feature Pressed");
    // Add your additional feature logic here
    // For example, display a message
    alert("This is an additional feature!");
  };

  return (
    <>
    <Text style={styles.headTitle}>Home</Text>

    <View style={styles.container}>
      {/* Employee Console */}
      <View style={styles.employeeConsole}>
        <Text style={styles.consoleTitle}>Employee Console</Text>
        {/* Add your employee console content here */}
        {/* For example: */}
        <Button title="COVID Vaccine Certificate" onPress={() => console.log("COVID Vaccine Cert")} color="#3498db" />
        <Button title="RIW Certificate" onPress={() => console.log("RIW Cert")} color="#2ecc71" />
        <Button title="RSA Certificate" onPress={() => console.log("RSA Certificate")} color="#e74c3c" />
      </View>

      {/* Clock in button */}
      {!clockedIn && (
        <View style={styles.clockButton}>
          <Button title="Clock In" onPress={handleClockIn} color="#27ae60" />
        </View>
      )}

      {/* Roster */}
      <View style={styles.roster}>
        <Text style={styles.rosterTitle}>Roster</Text>
        {/* Add your roster content here */}
        {/* For example: */}
        <Text style={[styles.rosterItem, { backgroundColor: '#f9e79f' }]}>17/04/024: 15:00 Pm-12:00am</Text>
        <Text style={[styles.rosterItem, { backgroundColor: '#f5cba7' }]}>19/04/024: 06:00 am-15:00pm</Text>
        <Text style={[styles.rosterItem, { backgroundColor: '#aed6f1' }]}>21/04/024: 15:00 Pm-12:00am</Text>
      </View>

      {/* Clock out button */}
      {clockedIn && (
        <View style={styles.clockButton}>
          <Button title="Clock Out" onPress={handleClockOut} color="#e74c3c" />
        </View>
      )}

      {/* Additional Feature */}
      <TouchableOpacity style={styles.additionalFeature} onPress={handleAdditionalFeature}>
        <Text style={styles.additionalFeatureText}>Additional Feature</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  headTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: '25%',
    textAlign: 'center',
    color: '#34495e', // Dark blue color
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ecf0f1', // Light gray background
  },
  employeeConsole: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  consoleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#34495e', // Dark blue color
  },
  clockButton: {
    marginBottom: 20,
  },
  roster: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  rosterTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#34495e', // Dark blue color
  },
  rosterItem: {
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: '#2c3e50', // Dark gray color
    fontSize: 16,
  },
  additionalFeature: {
    backgroundColor: '#9b59b6', // Purple color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  additionalFeatureText: {
    color: '#fff', // White color
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Home;