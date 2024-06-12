import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Inserir() {
  return (
    <View style={css.container}>
      <Text style={css.text}>Cadastro Usuário</Text>

      <TextInput
        inputMode="text"
        placeholder="Nome do Usuário"
      />

      <TextInput
        inputMode="text"
        placeholder="Tell Do Usuário"
      />

      <TextInput
        inputMode="text"
        placeholder="Email do Usuário"
      />

      <TextInput
        inputMode="text"
        placeholder="Senha do Usuário"
      />

      <TouchableOpacity>
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
    
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  }
})