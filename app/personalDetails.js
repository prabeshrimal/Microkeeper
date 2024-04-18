import React, { useContext, useState } from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {DBContext} from "../contexts/DBContext"
import { AuthContext } from "../contexts/AuthContext";
import {collection,query	, getDocs, addDoc } from "firebase/firestore";

const PersonalDetails = () => {
  const navigation = useNavigation();

  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [photo, setPhoto] = useState(null); // Store the selected photo as download URL from Firebase Storage
const db = useContext(DBContext)

  // Function to handle photo upload
  const handlePhotoUpload = async () => {
    // Implement photo upload logic using Firebase Storage
  };

  const auth = useContext(AuthContext)
  const firebaseemail= auth.currentUser.email
  setEmail(firebaseemail);

  const savepersonalDetails = async()=>{
    const data={name:name,email:email,contact:contact,photo:photo}
    const dbCollection = collection(db,'microkeeper')
    const docRef = await addDoc (dbCollection,data)
  }

  return (
    <View style={styles.container}>
      {/* Name */}
      <View style={styles.field}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      {/* Email */}
      <View style={styles.field}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
      </View>

      {/* Contact */}
      <View style={styles.field}>
        <Text style={styles.label}>Contact:</Text>
        <TextInput
          style={styles.input}
          value={contact}
          onChangeText={setContact}
          placeholder="Enter your contact"
          keyboardType="phone-pad"
        />
      </View>

      {/* Photo */}
      <View style={styles.field}>
        <Text style={styles.label}>Photo:</Text>
        
        {photo && <Image source={{ uri: photo }} style={styles.photo} />}
      </View>

      {/* Submit Button */}
      <Button title="Save" onPress={()=>savepersonalDetails()} />
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
  field: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: '#34495e', // Dark blue color
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#bdc3c7', // Light gray border color
    borderRadius: 5,
    padding: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make it a circle
    marginLeft: 10,
  },
});

export default PersonalDetails;
