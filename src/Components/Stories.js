import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Stories({produtos}) {

  return (
    <FlatList
      data={produtos}
      renderItem={ ({item}) => 
        <View style={css.story}>
          <Image source={{ uri: item.pessoaFoto}} style={css.image}/>
        </View>
      }
      keyExtractor={ (item) => item.id }
      contentContainerStyle={css.container}
      horizontal={true}
    />
  )
}
const css = StyleSheet.create({
    container: {
        height: 130,
        width: "100%",
       // padding: 20,
       // display: "flex",
       // flexDirection: "row",
       // justifyContent: "center",
       // alignItems: "flex-end",
       // gap: 10,
       // marginBottom: 20,
        backgroundColor: "#58C470",
        
        
    },
    /*story: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 30,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "lightgreen"
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover"
    }*/
})