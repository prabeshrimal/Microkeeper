import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"
import{useState, useEffect, useContext} from 'react'
import {Theme} from "../theme/Theme"
import { Stack } from "expo-router"
import { DBContext } from "../contexts/DBContext"

export default function Home( props ) {
  const [started, setStarted] = useState(false)
  const [ startTime, setStartTime]= useState()
  const [ stopTime, setStopTime] = useState()

  const db = useContext(DBContext)
  const getTime = () => {
    return new Date().getTime()
  }

  const manageTask = ()  => {
    setStarted(true) 
    setStartTime(getTime() )

  }

    return (
        <View style = {styles.container}>
            <Stack.Screen options={{ headerShown: true }}/>
            <View style = {styles.form}>
               <Text> Task Name</Text>
            <TextInput/>
            <Pressable style = {styles.button}>
            <Text style ={ styles.buttonText}> Start</Text>
           </Pressable>
        </View>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  form: {
    backgroundColor: Theme.secondary
  },
  button: {
    backgroundColor: Theme.dark,
    padding: 10,
  },
  buttonText:{
        Color: Theme.primaryLight,
    textAlign: 'center'
  }
})



