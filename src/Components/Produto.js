import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Produto({ title, image, description, id, category, getPessoaId,setDetalhes }) {
   
    return (
        <View style={css.container}>
            <>
            <View style={css.boxTitle}>
                <View style={css.circleAvatar}></View>
                <Text style={css.title}>{title}</Text>
            </View>
            <View style={css.boxImage}>
                <Image source={{ uri: image }} style={css.imagem}/>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>{description}</Text>
            </View>
            <View style={css.categoryBox}>
                <Text style={css.categoryText}>{category}</Text>
            </View>

            <TouchableOpacity style={css.btnDeta} onPress={()=> {setDetalhes(true); getPessoaId(id)}}>
                <Text style={css.btnText}>Detalhes</Text>
            </TouchableOpacity>
            </>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 600
    },
    boxTitle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 5
    },
    circleAvatar: {
        /*width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "white",
        marginRight: 10*/
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
      
    },
    boxImage: {
        width: "100%",
        height: 390
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderColor: "#58C470",
        borderWidth: 2
    },
    categoryBox: {
        width: "100%",
        marginTop: 15
    },
    descriptionBox: {
        width: "100%",
        marginTop: 15,
        padding: 10
    },
    descriptionText: {
        color: "white",
        textAlign: "justify"
    },
    categoryBox: {
        width: "100%",
        padding: 10
    },
    categoryText: {
        color: "white"
    },

    btnDeta: {
        backgroundColor: "#2A2A2A",
        borderWidth: 2,
        borderColor: "#58C470",
        marginTop: -90,
        height: 25,
        width: 200,
        alignItems: "center",
       

    },
    btnText:{
        color: "white"
    }
})