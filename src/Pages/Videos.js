import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Videos() {

  const [observacoesId, setObservacoesId] = useState([]);
  const [observacaoDescricao, setObservacaoDescricao] = useState([]);
  const [observacaoLocal, setObservacaoLocal] = useState([]);
  const [observacaoData, setObservacaoData] = useState([]);
  const [pessoaId, setPessoaId] = useState([]);
  const [usuarioId, setUsuarioId] = useState([]);

  async function getProdutos() {
    await fetch('http://10.139.75.60:5251/api/Observacoes/GetAllObservacoes', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json()) 
      .then(json => setProdutos(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProdutos();
  }, []);

  //==============================================================================================

  

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