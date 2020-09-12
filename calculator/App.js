import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [num1, setNum1] = React.useState("0");
  const [num2, setNum2] = React.useState("0");
  const [result, setResult] = React.useState(0);
  const [data, setData] = React.useState([])

  const add = () => {
    const res = parseInt(num1)+parseInt(num2)
    setResult(res);

    setData([{key: `${num1} + ${num2} = ${res}`}, ...data])
  }

  const subtract = () => {
    const res = parseInt(num1)-parseInt(num2)
    setResult(res);

    setData([{key: `${num1} - ${num2} = ${res}`}, ...data])
  }

  return (
    <View style={styles.container}>
      <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={num => setNum1(num)} value={num1}/>
      <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={num => setNum2(num)} value={num2}/>
      <View style={styles.buttonContainer}>
        <Button onPress={add} title="+"/>
        <Button onPress={subtract} title="-"/>
      </View>
      <Text>Result: {result}</Text>
      <Text>History: </Text>
      <FlatList
        data={data}
        renderItem={({item}) =>
            <Text>{item.key}</Text>}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
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
