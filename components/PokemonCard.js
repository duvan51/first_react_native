import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {useEffect, useState} from 'react';

import getPokemon from '../services/getPokemon.js';


const PokemonCard = ({url}) => {
    
    const [id , setId] = useState("");
    const [name , setName] = useState("");
    const [image, setImage] = useState("");
    
 
    useEffect(()=>{
        if(url){
            getPokemon(url).then((res)=>{
                setId(res.data.id)
                setName(res.data.name)
                setImage(res.data.sprites.other.home.front_default)
            })
        }
    })

    //styles of element pokemon card
    const styles = StyleSheet.create({
        tinyLogo: {
          width: 50,
          height: 50,
        },
        card:{
           width:100,
           height:100,
           backgroundColor:"#FDFFDD", 
        }

      });


 
    
    return (
    <View style={styles.card}>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: `${image}`,
        }}
      />
    </View>
  )


  
}

export default PokemonCard