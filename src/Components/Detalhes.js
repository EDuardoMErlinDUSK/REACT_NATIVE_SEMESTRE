import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Detalhes({ onPress, setDetalhes, pessoaNome, pessoaRoupa, pessoaCor, pessoaSexo, pessoaObservacao, pessoaLocalDesaparecimento, pessoaDtDesaparecimento, pessoaDtEncontro, PessoaStatus, usuarioNome

}) {
  

    return (
        <View >
          
            <Text>Detalhes</Text>
            <Text>{pessoaNome}</Text>
            <Text>{pessoaRoupa}</Text>
            <Text>{pessoaCor}</Text>
            <Text>{pessoaSexo}</Text>
            <Text>{pessoaObservacao}</Text>
            <Text>{pessoaLocalDesaparecimento}</Text>
            <Text>{pessoaDtDesaparecimento}</Text>
            <Text>{pessoaDtEncontro}</Text>
            <Text>{PessoaStatus}</Text>
            <Text>{usuarioNome}</Text>
           
            <TouchableOpacity>
                <Text>Nova Observação</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={setDetalhes(false)}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            
           
        </View>
    )
}