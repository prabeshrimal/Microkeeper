/*
import { View, Text, StyleSheet } from "react-native"
import { Stack } from "expo-router"

export default function Home( props ) {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true }}/>
            <Text>Home</Text>
        </View>
    )

}
*/
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const goToSearchPage = () => {
    navigation.navigate("Search"); // Assuming "Search" is the name of your search page component in the navigation stack
  };

  return (
    <View style={styles.container}>
      {/* Employee Console */}
      <View style={styles.employeeConsole}>
        <Text style={styles.consoleTitle}>Employee Console</Text>
        {/* Add your employee console content here */}
        {/* For example: */}
        <Button title="COVID Vaccine Cert" onPress={() => console.log("COVID Vaccine Cert")} />
        <Button title="RIW Cert" onPress={() => console.log("RIW Cert")} />
        <Button title="RSA Certificate" onPress={() => console.log("RSA Certificate")} />
      </View>

      {/* Clock in button */}
      <View style={styles.clockButton}>
        <Button title="Clock In" onPress={() => console.log("Clock In")} />
      </View>

      {/* Roster */}
      <View style={styles.roster}>
        <Text style={styles.rosterTitle}>Roster</Text>
        {/* Add your roster content here */}
        {/* For example: */}
        <Text>Date 1: Roster Content</Text>
        <Text>Date 2: Roster Content</Text>
        <Text>Date 3: Roster Content</Text>
      </View>

      {/* Clock out button */}
      <View style={styles.clockButton}>
        <Button title="Clock Out" onPress={() => console.log("Clock Out")} />
      </View>

      {/* Search button */}
      <View style={styles.searchButton}>
        <Button title="Go to Search" onPress={goToSearchPage} />
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
  },
  employeeConsole: {
    marginBottom: 20,
  },
  consoleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  clockButton: {
    marginBottom: 20,
  },
  roster: {
    marginBottom: 20,
  },
  rosterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchButton: {
    marginBottom: 20,
  },
});

export default Home;
