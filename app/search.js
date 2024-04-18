import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Search(props) {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSignIn = () => {
        // Implement sign-in logic here
        console.log('Sign In');
        setMenuOpen(false);
    };

    const handleSignOut = () => {
        // Implement sign-out logic here
        console.log('Sign Out');
        setMenuOpen(false);
    };

    const handleNavigate = (route) => {
        router.push(route);
        setMenuOpen(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons
                    name={menuOpen ? 'close' : 'menu'}
                    size={24}
                    color="#2c3e50" // Dark gray color
                    style={styles.menuIcon}
                    onPress={handleMenuToggle}
                />
                <Text style={styles.title}>Microkeeper</Text>
            </View>
            {menuOpen && (
                <View style={styles.dropdown}>
                    <Pressable style={styles.menuItem} onPress={handleSignIn}>
                        <Text style={styles.menuText}>Sign In</Text>
                    </Pressable>
                    <Pressable style={styles.menuItem} onPress={handleSignOut}>
                        <Text style={styles.menuText}>Sign Out</Text>
                    </Pressable>
                </View>
            )}
            <View style={styles.middle}>
                <Pressable style={styles.button} onPress={() => handleNavigate('/home')}>
                    <Text style={styles.buttonText}>Home</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleNavigate('/personalDetails')}>
                    <Text style={styles.buttonText}>Personal Details</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleNavigate('/timeTracking')}>
                    <Text style={styles.buttonText}>Time tracking</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleNavigate('/aboutUs')}>
                    <Text style={styles.buttonText}>About Us</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1', // Light gray background
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#bdc3c7', // Light gray border color
    },
    menuIcon: {
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1, // Allow title to take remaining space
        color: '#34495e', // Dark blue color
    },
    dropdown: {
        position: 'absolute',
        top: 60, // Adjust the top position as needed
        right: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#bdc3c7', // Light gray border color
        borderRadius: 5,
        zIndex: 1,
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#bdc3c7', // Light gray border color
    },
    menuText: {
        fontSize: 16,
        color: '#34495e', // Dark blue color
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#3498db', // Blue color
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18, // Increased font size
        fontWeight: 'bold',
        color: '#fff', // White color
    },
    // Other styles for Pressable buttons and content in the middle section
});
