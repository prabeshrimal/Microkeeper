import { SafeAreaView, StyleSheet, Button } from "react-native"
import React, { useContext } from "react"
import { Theme } from "../theme/Theme"
import { AuthContext } from "../contexts/AuthContext"
import { signOut } from "@firebase/auth"
import { router } from "expo-router"

export default function SignOut() {
    const auth = useContext(AuthContext)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully")
                router.replace('/login') // or any other route you want to navigate after sign out
            })
            .catch((error) => {
                console.error("Error signing out:", error)
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Sign out" onPress={handleSignOut} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryDark,
        justifyContent: "center",
        alignItems: "center",
    },
})
