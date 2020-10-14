import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput, Button, Image} from 'react-native';

export default function App() {

    const [keyword, setKeyword] = React.useState("")
    const [recipes, setRecipes] = React.useState([])

    return (
    <View style={styles.container}>
        <FlatList
        style={{marginTop: "15%"}}
        data={recipes}
        keyExtractor={item => item.title}
        renderItem={({item}) =>
            <>
            <Text>{item.title}</Text>
            <Image style={{width: 50, height: 50}} source={{uri : item.thumbnail}}/>
            </>
        }/>
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
            .then(data => props.setRecipes(data))
    }

    return (
        <View>
            <TextInput style={styles.textInput} value={props.keyword} onChangeText={props.onChangeText}/>
            <Button title="Search" onPress={findRecipe}/>
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
    textInput: {
        width: 200,
        borderColor: "gray",
        borderWidth: 1,
    },
});