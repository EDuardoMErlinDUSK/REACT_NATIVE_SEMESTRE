import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function Inserir({setCadastro}) {
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
        style={css.campos}
        placeholderTextColor={"#fff"}
      />

      <TextInput
        inputMode="text"
        placeholder="Tell Do Usuário"
        value={usuarioTelefone}
        onChangeText={(digitado) => setUsuarioTelefone(digitado)}
        style={css.campos}
        placeholderTextColor={"#fff"}
      />

      <TextInput
        inputMode="text"
        placeholder="Email do Usuário"
        value={usuarioEmail}
        onChangeText={(digitado) => setUsuarioEmail(digitado)}
        style={css.campos}
        placeholderTextColor={"#fff"}
      />

      <TextInput
        inputMode="text"
        placeholder="Senha do Usuário"
        value={usuarioSenha}
        onChangeText={(digitado) => setUsuarioSenha(digitado)}
        style={css.campos}
        placeholderTextColor={"#fff"}
      />

      <TouchableOpacity onPress={CadastraUsu} style={css.btn}>
        <Text style={css.btnTXT}>Criar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setCadastro(false)} style={css.btn}>
        <Text style={css.btnTXT}>Voltar</Text>
      </TouchableOpacity>
    </View>

  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#2A2A2A",
    flexGrow: 1,
    
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    
  },

  campos: {
    color: "white",
    borderWidth: 2,
    borderColor: "#58C470",
    width: 340,
    borderRadius: 7,
    height: 50,
    marginTop: 30

  },

    btn: {
      color: "white",
      borderWidth: 2,
      borderColor: "#58C470",
      width: 340,
      borderRadius: 7,
      marginTop: 30,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#58C470"
      
      
    },

    btnTXT: {
      color: "white",
      alignItems: "center",
      
    },

    
})