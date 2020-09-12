import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [data, setData] = React.useState([])
  const [item, setItem] = React.useState()

  const add = () => {
    setData([{key: item}, ...data])
  }

  const reset = () => {
    setData([])
  }

  return (
    <View style={styles.container}>
      <Text>Shopping list</Text>
      <TextInput style={styles.textInput} onChangeText={item => setItem(item)} value={item}/>
      <View style={styles.buttonContainer}>
        <Button title="Addd" onPress={add}/>
        <Button title="Reset" onPress={reset}/>
      </View>
      <FlatList
          data={data}
          renderItem={({item}) =>
              <Text>{item.key}</Text>}/>
      <StatusBar style="auto" />
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
    width: 140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
