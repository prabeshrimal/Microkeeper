import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, Alert, ImageBackground } from 'react-native';
import { collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { DBContext } from '../contexts/DBContext';
import { Theme } from '../theme/Theme';
import { Stack } from 'expo-router';

export default function personalDetails(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [listData, setListData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [id, setId] = useState('');

  const db = useContext(DBContext);

  const saveData = async () => {
    const userData = { name, email, phone };
    const dbcollection = collection(db, `User`);
    const docRef = await addDoc(dbcollection, userData);
    readData(); // Refresh the list after saving
    clearForm(); // Clear the form fields after saving
    Alert.alert('Success', 'Data saved successfully.');
  };

  const readData = async () => {
    const q = query(collection(db, 'User'));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      item.id = doc.id;
      data.push(item);
    });
    setListData(data);
  };

  useEffect(() => {
    readData();
  }, []); // Run once on component mount

  const updateData = async () => {
    const userData = { name, email, phone };
    const docRef = doc(db, 'User', id);
    await updateDoc(docRef, userData);
    readData(); // Refresh the list after updating
    clearForm(); // Clear the form fields after updating
    Alert.alert('Success', 'Data updated successfully.');
  };

  const deleteData = async () => {
    const docRef = doc(db, 'User', id);
    await deleteDoc(docRef);
    readData(); // Refresh the list after deleting
    clearForm(); // Clear the form fields after deleting
    Alert.alert('Success', 'Data deleted successfully.');
  };

  const clearData = async () => {
    const q = query(collection(db, 'User'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      const docRef = doc(db, 'User', doc.id);
      await deleteDoc(docRef);
    });
    readData(); // Refresh the list after clearing
    clearForm(); // Clear the form fields after clearing
    Alert.alert('Success', 'All data cleared.');
  };

  const clearForm = () => {
    setId('');
    setName('');
    setEmail('');
    setPhone('');
  };

  const searchById = async () => {
    if (!id) {
      Alert.alert('Error', 'Please enter an ID for search.');
      return;
    }
  
    const q = query(collection(db, 'User').where('__name__', '==', id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      item.id = doc.id;
      data.push(item);
    });
    setListData(data);
  
    if (data.length === 0) {
      Alert.alert('Not Found', 'No data found for the provided ID.');
    }
  };
  

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setSelectedId(item.id);
        setId(item.id);
        setName(item.name);
        setEmail(item.email);
        setPhone(item.phone);
      }}
      style={[styles.itemContainer, selectedId === item.id && styles.selectedItem]}
    >
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
    </Pressable>
  );

  return (
    <ImageBackground source={require('../assets/abdul-a-CxRBtNe243k-unsplash.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: true }} />
        <View style={styles.form}>
          <Text>ID</Text>
          <TextInput
            placeholder="ID"
            value={id}
            onChangeText={(text) => setId(text)}
            style={styles.input}
          />
          <Text>Name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text>Phone</Text>
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={styles.input}
          />
          <View style={styles.buttonRow}>
            <Pressable style={styles.button} onPress={saveData}>
              <Text style={styles.buttonText}>Save Data</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={updateData}>
              <Text style={styles.buttonText}>Update Data</Text>
            </Pressable>
          </View>
          <View style={styles.buttonRow}>
            <Pressable style={styles.button} onPress={deleteData}>
              <Text style={styles.buttonText}>Delete Data</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={clearData}>
              <Text style={styles.buttonText}>Clear Data</Text>
            </Pressable>
          </View>
          <Pressable style={styles.searchButton} onPress={searchById}>
            <Text style={styles.buttonText}>Search</Text>
          </Pressable>
        </View>
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  form: {
    backgroundColor: Theme.secondary,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: Theme.dark,
    padding: 10,
    width: '48%', // Adjust as needed
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: Theme.primary,
    padding: 10,
    width: '100%', // Adjust as needed
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: Theme.primaryLight,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
