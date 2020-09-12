import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [rnd, setRnd] = React.useState(Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = React.useState("0")
  const [text, setText] = React.useState("Guess a number between 1 and 100")
  const [tries, setTries] = React.useState(1)

  const makeaGuess = () => {
    if (parseInt(guess) < rnd) {
      setText(`Your guess ${guess} is too low`)
    } else if (parseInt(guess) > rnd) {
      setText(`Your guess ${guess} is too high`)
    } else if (parseInt(guess) === rnd) {
      Alert.alert(
          "You won!",
          `You guessed the number in ${tries} tries.`,
          [{
            text: "Alright!"
          }]
      )
    } else if (parseInt(guess) === 0) {
      setText("You didn't guess a number")
    }
    setTries(tries+1)
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={styles.textInput} onChangeText={num => setGuess(num) } value={guess} />
      <View style={styles.buttonContainer}>
        <Button title="Make a guess" onPress={makeaGuess}/>
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
  textInput: {
    height: 40,
    width: 30,
    paddingLeft: 7,
    marginTop: 5,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 120,
  },
});
