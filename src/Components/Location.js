import React from 'react'
import GetLocation from 'react-native-get-location'
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const Location = () => {
    const [location, setLocation] = React.useState();

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        console.log(location);
        setLocation(location)
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{JSON.stringify(location)}</Text>
            <Text style={styles.item}>Latitude</Text>
            <Text style={styles.item}>{JSON.stringify(location.latitude)}</Text>
            <Text style={styles.item}>Latitude</Text>
            <Text style={styles.item}>{JSON.stringify(location.longitude)}</Text>            
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    }
  });