import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';
import { useFocusEffect } from '@react-navigation/native';
import Detalhes from '../Components/Detalhes';


export default function Home() {
  const [detalhes, setDetalhes] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [pessoa, setPessoa] = useState();
  const [pessoaNome, setPessoaNome] = useState();
  const [pessoaRoupa, setPessoaRoupa] = useState();
  const [pessoaCor, setPessoaCor] = useState();
  const [pessoaSexo, setPessoaSexo] = useState();
  const [pessoaObservacao, setPessoaObservacao] = useState();
  const [pessoaLocalDesaparecimento, setPessoaLocalDesaparecimento] = useState();
  const [pessoaDtDesaparecimento, setPessoaDtDesaparecimento] = useState();
  const [pessoaDtEncontro, setPessoaDtEncontro] = useState();
  const [PessoaStatus, setPessoaStatus] = useState();
  const [usuarioNome, setUsuarioNome] = useState();

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

  async function getPessoaId(id) {
    await fetch('http://10.139.75.60:5251/api/Pessoas/GetPessoaId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(json => {

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

  async function getUsuarioId(id) {
    await fetch('http://10.139.75.60:5251/http://api/Usuarios/GetUsuarioId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(json => {
        setUsuarioNome(json.UsuarioNome);
      });

  }

  //PARA BAIXO é o DETALHES
  //=@@@@====######=======%%====!!!========#####======@@====%%======!!======######======@@===#####=======================


  async function getDetalhes(id) {
    await fetch('http://10.139.75.60:5251/http:/api/Pessoas/GetPessoaId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(json => {
        setPessoaObservacao(json.PessoaObservacao);

      });

  }


  return (
    <View style={css.container}>
      {produtos && !detalhes &&
        <>
          <Stories produtos={produtos} />
          <FlatList
            data={produtos}
            renderItem={({ item }) => <Produto style={css.container} title={item.pessoaNome} image={item.pessoaFoto} setDetalhes={setDetalhes} getPessoaId={getPessoaId}/*description={item.pessoaObservacao}*/ />}
            keyExtractor={(item) => item.pessoaId}
            contentContainerStyle={{ height: (produtos.length * 600) + 110 }}
          />
        </>
      }
      {!produtos && !detalhes &&
        <Text style={css.text}>Carregando produtos...</Text>}

      {detalhes && <Detalhes

        getPessoaId={getPessoaId}
        description={pessoaObservacao}
        setDetalhes={setDetalhes}
        pessoaNome={pessoaNome}
        pessoaRoupa={pessoaRoupa}
        pessoaCor={pessoaCor}
        pessoaSexo={pessoaSexo}
        pessoaObservacao={pessoaObservacao}
        pessoaLocalDesaparecimento={pessoaLocalDesaparecimento}
        pessoaDtDesaparecimento={pessoaDtDesaparecimento}
        pessoaDtEncontro={pessoaDtEncontro}
        PessoaStatus={PessoaStatus}
        usuarioNome={usuarioNome}
        getDetalhes={getDetalhes}
      />}
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    color: "black",
    backgroundColor: "lightgray",
  }


})