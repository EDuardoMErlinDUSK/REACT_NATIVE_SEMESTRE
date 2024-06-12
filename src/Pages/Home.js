import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';
import { useFocusEffect } from '@react-navigation/native';


export default function Home() {

  const [produtos, setProdutos] = useState([]);
  const [pessoa, setPessoa] = useState([]);
  const [pessoaNome, setPessoaNome] = useState([]);
  const [pessoaRoupa, setPessoaRoupa] = useState([]);
  const [pessoaCor, setPessoaCor] = useState([]);
  const [pessoaSexo, setPessoaSexo] = useState([]);
  const [pessoaObservacao, setPessoaObservacao] = useState([]);
  const [pessoaLocalDesaparecimento, setPessoaLocalDesaparecimento] = useState([]);
  const [pessoaDtDesaparecimento, setPessoaDtDesaparecimento] = useState([]);
  const [pessoaDtEncontro, setPessoaDtEncontro] = useState([]);
  const [PessoaStatus, setPessoaStatus] = useState([]);
  const [usuarioNome, setUsuarioNome] = useState([]);

  async function getProdutos() {
    await fetch('http://10.139.75.60:5251/api/Pessoas/GetAllPessoas', {   
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

//=========================================================================
  
  async function GetPessoaId(id)
  {
      await fetch('http://10.139.75.60:5251/api/Pessoas/GetPessoaId/' + id, {
          method: 'GET',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
      })
          .then((response) => response.json() )
          .then(json => {
              setPessoaId(json.PessoaId);
              setPessoaNome(json.PessoaNome);
              setPessoaRoupa(json.PessoaRoupa);
              setPessoaCor(json.PessoaCor);
              setPessoaSexo(json.PessoaSexo);
              setPessoaObservacao(json.PessoaObservacao);
              setPessoaLocalDesaparecimento(json.PessoaLocalDesaparecimento);
              setPessoaDtDesaparecimento(json.PessoaDtDesaparecimento);
              setPessoaDtEncontro(json.PessoaDtEncontro);
              setPessoaStatus(json.PessoaStatus);
             
          });
          getUsuarioId();
          
  }

//========================================================================

  async function getUsuarioId(id)
  {
      await fetch('http://10.139.75.60:5251/http://api/Usuarios/GetUsuarioId/' + id, {
          method: 'GET',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
      })
          .then((response) => response.json() )
          .then(json => {
              setUsuarioNome(json.UsuarioNome);
          });
          
  }
  


  return (
    <View style={css.container}>
      {produtos ?
        <>
          <Stories produtos={produtos} />
          <FlatList
            data={produtos}
            renderItem={({ item }) => <Produto style={css.container} title={item.pessoaNome} image={item.pessoaFoto} pessoaObservacao={item.pessoaObservacao} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: (produtos.length * 600) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando produtos...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    color: "black",
    backgroundColor: "lightgray",
  }


})