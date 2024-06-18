import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Detalhes({ setDetalhes, pessoaNome, pessoaRoupa, pessoaCor, pessoaSexo, pessoaObservacao, pessoaLocalDesaparecimento, pessoaDtDesaparecimento, pessoaDtEncontro, PessoaStatus, usuarioNome

}) {
    const [observacao, setObservacao] = useState();

    return (
        <View style={css.container} >
             
            <Text style={css.dadosInfo}>Detalhes</Text>
            <Text style={css.dadosInfo}>{pessoaNome}</Text>
            <Text style={css.dadosInfo}>{pessoaRoupa}</Text>
            <Text style={css.dadosInfo}>{pessoaCor}</Text>
            <Text style={css.dadosInfo}>{pessoaSexo}</Text>
            <Text style={css.dadosInfo}>{pessoaObservacao}</Text>
            <Text style={css.dadosInfo}>{pessoaLocalDesaparecimento}</Text>
            <Text style={css.dadosInfo}>{pessoaDtDesaparecimento}</Text>
            <Text style={css.dadosInfo}>{pessoaDtEncontro}</Text>
            <Text style={css.dadosInfo}>{PessoaStatus}</Text>
            <Text style={css.dadosInfo}>{usuarioNome}</Text>
           
            <TouchableOpacity onPress={()=> setObservacao(true)} style={css.btnObserva}>
                <Text style={css.ObservaTXT}>Nova Observação</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> setDetalhes(false)} style={css.btnVoltar}>
                <Text style={css.VoltarTxt}>Voltar</Text>
            </TouchableOpacity>
            
           
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#2A2A2A",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200
    },

    btnVoltar: {
        color: "white",
        backgroundColor: "green"
    },

    VoltarTxt: {
        color: "white"
    },

    dadosInfo: {
        color: "white"
    },

    btnObserva: {
        color:"white",
        color: "blue"
    },

    ObservaTXT: {
        color: "white"
    }
  
  
  })