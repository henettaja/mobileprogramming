import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {

    const [keyword, setKeyword] = React.useState("")
    const [coords, setCoords] = React.useState("")

    const getLocation = () => {
        fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=Ds8UTpkoUXd54zFHKBQgAKJVCxuqVRqx&location=${keyword}`)
            .then(data => data.json)
            .then(data => data.results[0].locations[0].latLng)
            .then(data => setCoords(data))
    }

    return (
        <View style={styles.container}>
            <MapView
                style={
                    {flex: 9,
                        width: "100%",
                        height: "100%"
                        }}
                initialRegion={
                    { latitude: 60.200692,
                        longitude: 24.934302,
                        latitudeDelta: 0.0322,
                        longitudeDelta: 0.0221}}>
            <Marker
                coordinate={{latitude: 0, longitude: 0}}
                title={keyword} />
            </MapView>
            <View style={styles.navbar}>
                <TextInput style={styles.textInput} value={keyword} onChangeText={word => setKeyword(word)}/>
                <Button color={"gray"} title="Search"
                        //onPress={getLocation}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbar: {
        flex: 1.5,
        width: "100%",
        backgroundColor: "#4285F4",
    },
    textInput: {
        margin: 10,
        height: 40,
        borderColor: "white",
        backgroundColor: "white",
        borderWidth: 1,
    },
});
