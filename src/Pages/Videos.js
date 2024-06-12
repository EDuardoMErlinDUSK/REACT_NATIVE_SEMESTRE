import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Videos() {

  return (
    <View style={css.container}>
      <Text style={css.text}>Detalhes</Text>

      <TouchableOpacity>
        <Text>NovaObservacao</Text>
      </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    color: "black"
  }
})