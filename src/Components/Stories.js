import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Stories() {

  return (
 
        <View style={css.story}>
          <Text style={css.Find} >Find Me</Text>
        </View>

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
    story: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
        backgroundColor: "#58C470",
        
        
       
    },

      Find: {
        height: 25,
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        fontSize: 24,
        color: "black"
        
      }

      
})