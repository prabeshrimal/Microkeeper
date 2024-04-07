import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SearchPage = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Logic to handle search
    console.log("Searching for:", searchTerm);
    // Here you can implement the logic for search, for example, fetching data or filtering data based on searchTerm
    // For now, let's just log the search term
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter search term"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default SearchPage;
