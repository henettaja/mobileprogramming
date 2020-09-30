import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import {Button} from "react-native-web";

export default function App() {

    const [keyword, setKeyword] = React.useState("")
    const {recipes, setRecipes} = React.useState([])

    return (
    <View style={styles.container}>
        <FlatList
        data={recipes}
        renderItem={({item}) =>
            <Text>{item.key}</Text>}
        />
        <Search keyword={keyword} onChangeText={word => setKeyword(word)} setRecipes={setRecipes}/>
      <StatusBar style="auto" />
    </View>
  );
}
function Search(props) {

    const findRecipe = () => {
        fetch(`http://www.recipepuppy.com/api/?i=${props.keyword}&p=1`)
            .then(response => response.json())
            .then(data => data.results)
            .then(data => props.setRecipes)
            .catch((error) => {
                Alert.alert("Error", error)
            })
    }

    return (
        <View>
            <TextInput value={props.keyword} onChangeText={props.onChangeText}/>
            <Button title="Search" onPress={findRecipe()}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});