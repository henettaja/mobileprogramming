import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [num1, setNum1] = React.useState("0");
  const [num2, setNum2] = React.useState("0");
  const [result, setResult] = React.useState(0);

  const add = () => {
    setResult(parseInt(num1)+parseInt(num2));
  }

  const subtract = () => {
    setResult(parseInt(num1)-parseInt(num2));
  }

  return (
    <View style={styles.container}>
      <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={num => setNum1(num)} value={num1}/>
      <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={num => setNum2(num)} value={num2}/>
      <View style={styles.buttonContainer}>
        <Button onPress={add} title="+"/>
        <Button onPress={subtract} title="-"/>
      </View>
      <Text>Result: {result} </Text>
      <StatusBar style="auto"/>
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
  textInput: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
