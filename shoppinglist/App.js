import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import * as sqlite from 'expo-sqlite';

export default function App() {

  const [data, setData] = React.useState([])
  const [item, setItem] = React.useState()
  const [amount, setAmount] = React.useState()

  const db = sqlite.openDatabase('shoppinglist.db')

  // Create database
  React.useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists item (id integer primary key not null, item text, amount text);')
    }, null, updateData)
    }, [])

  // Save shopping list item to database
  const saveItem = () => {
    db.transaction(tx => {
          tx.executeSql('insert into item (item, amount) values (?, ?);', [item, amount]);
        }, null, updateData)
  }

  // Update data state
  const updateData = () => {
    db.transaction(tx => {
      tx.executeSql('select * from item;', [], (_, { rows }) =>
          setData(rows._array)
      );
    });
  }

  // Delete a shopping list item
  const deleteItem = (id) => {
    db.transaction(
        tx => {
          tx.executeSql(`delete from course where id = ?;`, [id]);
        }, null, updateList
    )
  }

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
      <TextInput style={styles.textInput} onChangeText={amount => setAmount(amount)} value={amount}/>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveItem}/>
        <Button title="Reset" onPress={reset}/>
      </View>
      <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({item}) =>
              <View style={styles.listContainer}>
                <Text>{item.item}, {item.amount}</Text>
                <Text style={{color: 'blue'}} onPress={() => deleteItem(item.id)}>Done</Text>
              </View>}/>
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
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
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
