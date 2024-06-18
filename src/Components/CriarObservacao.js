import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function CriarObservacao() {
    const [observacaoDescricao, setObservacaoDescricao] = useState();
    const [observacaoLocal, setObservacaoLocal] = useState();
    const [observacaoData, setObservacaoData] = useState();
    const [pessoaId, setPessoaId] = useState();
    const [usuarioId, setUsuarioId] = useState();
    
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
      <Text style={css.text}>Criar Observação</Text>

      <TextInput
        inputMode="text"
        placeholder="observação da descrição"
        value={observacaoDescricao}
        onChangeText={(digitado) => setObservacaoDescricao(digitado)}
      />

      <TextInput
        inputMode="text"
        placeholder="Local da observação"
        value={observacaoLocal}
        onChangeText={(digitado) => setObservacaoLocal(digitado)}
      />

      <TextInput
        inputMode="text"
        placeholder="Data da observação"
        value={observacaoData}
        onChangeText={(digitado) => setObservacaoData(digitado)}
      />


      <TouchableOpacity onPress={CriarObservacao}>
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
)

}
