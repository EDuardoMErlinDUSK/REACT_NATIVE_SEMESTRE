import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Detalhes from './Detalhes';

export default function CriarObservacao({setObservacao,pessoaId, usuarioId}) {
    const [observacaoDescricao, setObservacaoDescricao] = useState();
    const [observacaoLocal, setObservacaoLocal] = useState();
    const [observacaoData, setObservacaoData] = useState();
    
    async function CriarObservacao() {
        if(observacaoDescricao!= null ||observacaoLocal!= null || observacaoData!= null){
        await fetch('http://10.139.75.60:5251/api/Observacoes/InsertObservacoes', {
            method: 'POST',
            headers: { 
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              observacaoDescricao: observacaoDescricao,
              observacaoLocal: observacaoLocal,
              observacaoData: observacaoData,
              pessoaId: pessoaId,
              usuarioId: usuarioId,
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
      <Text style={css.title} >Criar Observação</Text>

      <TextInput
        inputMode="text"
        placeholder="observação da descrição"
        value={observacaoDescricao}
        onChangeText={(digitado) => setObservacaoDescricao(digitado)}
        style={css.campos}
        placeholderTextColor={"#fff"}
      />

      <TextInput
        inputMode="text"
        placeholder="Local da observação"
        value={observacaoLocal}
        onChangeText={(digitado) => setObservacaoLocal(digitado)}
        style={css.campos}
        placeholderTextColor={"#fff"}
      />

      <TextInput
        inputMode="text"
        placeholder="Data da observação"
        value={observacaoData}
        onChangeText={(digitado) => setObservacaoData(digitado)}
        style={css.campos}
        placeholderTextColor={"#fff"}
      />


      <TouchableOpacity onPress={CriarObservacao} style={css.btn}>
        <Text>Criar</Text>
      </TouchableOpacity> 

      <TouchableOpacity onPress={()=> setObservacao(false)} style={css.btnVoltar}>
                <Text style={css.VoltarTxt}>Voltar</Text>
            </TouchableOpacity>
    
    </View>
)

}

const css = StyleSheet.create({

  container: {

  },

  title: {
    fontSize: 30,
    color: "white",
    textDecorationLine: "underline"
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

  btnVoltar: {
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
      backgroundColor: "#58C470",
      marginBottom: 300
  }

})
