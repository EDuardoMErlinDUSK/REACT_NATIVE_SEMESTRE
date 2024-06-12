import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function Perfil() {
  return (
    <View style={css.container}>
      <Text style={css.text}>Criar Observação</Text>

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Nome do usuario"
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Observação do Local"
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Data da observação"
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Pessoa"
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Usuário"
      />

      <TouchableOpacity style={css.btnSal}>
        <Text>Salvar</Text>
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
    alignItems: "center"
  },
  text: {
    color: "black"
  },

  campos: {
    borderWidth: 1,
    width: 330,
    height: 40,
    borderColor: "lightgreen"
  },

  btnSal: {
    borderWidth: 1,
    width: 330,
    height: 40,
    borderColor: "lightgreen",
    backgroundColor: "lightgreen"
  }
})