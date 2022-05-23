import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import React, {useEffect, useState} from 'react';

import getAllpokemons from './services/getAllpokemons.js'
import PokemonCard from './components/PokemonCard.js'


const App = () => {
  const [data, setData] = useState([])
 
  //getAllPokemons
  useEffect(()=>{ 
    getAllpokemons().then((res)=>{
    setData(res.data.results)    
    })
  },[])

  
  const List = data.map((dat)=> (
      <PokemonCard name={dat.name} url={dat.url} key={dat.url}/>
  ))


  //styles
  const styles = StyleSheet.create({
    view: {
      backgroundColor:"#FFFF00",
      display: "flex",
      flexDirection:"row",
      paddingTop: "10px",
    }
  });


  return (
    <View style={styles.view}>
      {List}
    </View>
    
   
  )

}
export default App
