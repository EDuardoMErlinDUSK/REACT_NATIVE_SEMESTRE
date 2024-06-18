import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Perfil() {

  const [observacoesId, setObservacoesId] = useState([]);
  const [observacaoDescricao, setObservacaoDescricao] = useState([]);
  const [observacaoLocal, setObservacaoLocal] = useState([]);
  const [observacaoData, setObservacaoData] = useState([]);
  const [pessoaId, setPessoaId] = useState([]);
  const [usuarioId, setUsuarioId] = useState([]);

  async function GetUsuarioId(id)
  {
    await fetch('http://10.139.75.60:5251/api/Observacoes/InsertObservacoes' + id, {
      method: 'GET',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
    })
      .then((response) => response.json() )
      .then(json => {
        setObservacoesId(json.ObservacoesId);
        setObservacaoDescricao(json.ObservacaoDescricao);
        setObservacaoLocal(json.ObservacaoLocal);
        setObservacaoData(json.ObservacaoData);
        setPessoaId(json.PessoaId);
        setUsuarioId(json.UsuarioId);
      });
  }

  //================================================================================================

  async function GetPessoaId(id)
  {
    await fetch('http://10.139.75.60:5251/api/Observacoes/InsertObservacoes' + id, {
      method: 'GET',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
    })
    .then((response) => response.json() )
    .then(json => {
      setObservacoesId(json.ObservacoesId);
      setObservacaoDescricao(json.ObservacaoDescricao);
      setObservacaoLocal(json.ObservacaoLocal);
      setObservacaoData(json.ObservacaoData);
      setPessoaId(json.PessoaId);
      setUsuarioId(json.UsuarioId);
    });
  }
  


  return (
    <View style={css.container}>
      
      <Text style={css.text}>Criar Observação</Text>

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Nome do usuario"
        TextInput={setObservacaoDescricao}
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Observação do Local"
        TextInput={setObservacaoLocal}
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Data da observação"
        TextInput={setObservacaoData}
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Pessoa"
        TextInput={setPessoaId}
      />

      <TextInput style={css.campos}
        inputMode="text"
        placeholder="Usuário"
        TextInput={setUsuarioId}
      />

      <TouchableOpacity style={css.btnSal} onPress={() => aq ()}>
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