import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

    const[msg, setMsg] = React.useState('');

    const buttonPressed = () => {
        Alert.alert('Hello', 'You pressed the button ' + {msg} + "!");
    };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={buttonPressed} color="#000" title="Press me!"/>
      <TextInput onChangeText={text => setMsg(text)} value={msg}
        style={{width:200, borderColor: 'gray', borderWidth: 1}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4630EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
