import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function Inserir() {
  const [usuarioNome, setUsuarioNome] = useState();
  const [usuarioTelefone, setUsuarioTelefone] = useState();
  const [usuarioEmail, setUsuarioEmail] = useState();
  const [usuarioSenha, setUsuarioSenha] = useState();
  
  async function CadastraUsu() {
    if(usuarioNome!= null ||usuarioTelefone!= null || usuarioEmail!= null || usuarioSenha!= null){
    await fetch('http://10.139.75.60:5251/api/Usuarios/InsertUsuarios', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        usuarioNome: usuarioNome,
        usuarioTelefone: usuarioTelefone,
        usuarioEmail: usuarioEmail,
        usuarioSenha: usuarioSenha
      })
    })
    .then(res => res.json())
    .then(json => alert("deu certo"))
      .catch(err => console.log(err))
  }
  else{
    alert("algo deu errado")
  }}

  return (
    <View style={css.container}>
      <Text style={css.text}>Cadastro Usuário</Text>

      <TextInput
        inputMode="text"
        placeholder="Nome do Usuário"
        value={usuarioNome}
        onChangeText={(digitado) => setUsuarioNome(digitado)}
      />

      <TextInput
        inputMode="text"
        placeholder="Tell Do Usuário"
        value={usuarioTelefone}
        onChangeText={(digitado) => setUsuarioTelefone(digitado)}
      />

      <TextInput
        inputMode="text"
        placeholder="Email do Usuário"
        value={usuarioEmail}
        onChangeText={(digitado) => setUsuarioEmail(digitado)}
      />

      <TextInput
        inputMode="text"
        placeholder="Senha do Usuário"
        value={usuarioSenha}
        onChangeText={(digitado) => setUsuarioSenha(digitado)}
      />

      <TouchableOpacity onPress={CadastraUsu}>
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