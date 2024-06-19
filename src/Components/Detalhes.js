import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CriarObservacao from './CriarObservacao';

export default function Detalhes({ pessoaId, usuarioId, setDetalhes, pessoaNome, pessoaRoupa, pessoaCor, pessoaSexo, pessoaObservacao, pessoaLocalDesaparecimento, pessoaDtDesaparecimento, pessoaDtEncontro, PessoaStatus, usuarioNome

}) {
    const [observacao, setObservacao] = useState();

    return (
        <View style={css.container} >
             {!observacao ?
             <>
            <Text style={css.title}>Detalhes</Text>
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
            </>
             :
             <CriarObservacao
             setObservacao={setObservacao}
             pessoaId={pessoaId}
             usuarioId={usuarioId}/>
             }




        </View>
        
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#2A2A2A",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
    },

    title: {
        fontSize: 30,
        color: "white",
        textDecorationLine: "underline"
    },

    btnVoltar: {
        color: "white",
        backgroundColor: "#58C470",
        height: 25,
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        borderRadius: 5,
        marginBottom:300

    },

    VoltarTxt: {
        color: "black"
    },

    dadosInfo: {
        color: "white",
        marginTop:8
    },

    btnObserva: {
        color: "white",
        backgroundColor: "#58C470",
        height: 25,
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

    ObservaTXT: {
        color: "black"
    }
  
  
  })