import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function App() {

    const [value, setValue] = React.useState(0.0)
    const [convValue, setConvValue] = React.useState(0.0)

  return (
    <View style={styles.container}>
      <Text>{convValue}</Text>
      <TextInput style={styles.textInput} value={value} onChangeText={value => setValue(value)}/>
      <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
          }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
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
  textInput: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
});
