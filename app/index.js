import { SafeAreaView, StyleSheet, ImageBackground} from "react-native"
import { useContext, useEffect } from "react"

import { AuthenticationForm } from "../components/AuthenticationForm"
import { AlternateAuth } from "../components/AlternateAuth"
import { Theme } from "../theme/Theme"
import { AuthContext } from "../contexts/AuthContext"
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { useRouter } from "expo-router"
import{onAuthStateChanged} from "firebase/auth"

export default function Register ( props ) {
    const auth = useContext( AuthContext )
    const router = useRouter()

   
    onAuthStateChanged (auth,  (user) => {
        if(user) {
            router.replace('/search')

        }
    })

   
    
    const createAccount = ( email, password ) => {
        createUserWithEmailAndPassword(auth,email,password)
            .then( (userCredential) => {
                console.log( userCredential.user )
                router.push('/search')
            })
            .catch( (error) => {
                console.log( error.code, error.message )
            })
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={require("../assets/patrick-langwallner-7VO1tQLtJmU-unsplash.jpg")}>
            <AuthenticationForm title="Register for an account" action="Sign up" handler={createAccount} />
            <AlternateAuth 
            text="Already have an account?"
            route="/login" 
            linkText="Login" 
            />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: Theme.primaryLight,
        justifyContent: "center",
    },
    ImageBackground:{
        flex:1,
        justifyContent: 'center'
    },
})