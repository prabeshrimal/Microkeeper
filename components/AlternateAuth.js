import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"
export function AlternateAuth(props) {
  return (
    <View style={styles.component}>
      <Link  href={props.route} style={styles.linktext}>{props.text} {props.linkText}</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    color:'white',
  },
  linktext:{
    fontSize:20,
    fontWeight: 'bold',
    color:'black'
  },
})