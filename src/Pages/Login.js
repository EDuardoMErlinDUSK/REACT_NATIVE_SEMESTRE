import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Inserir from './Inserir';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [ cadastro, setCadastro ]= useState(false);

    const { Login, error } = useContext(AuthContext);

    function RealizaLogin() {
       Login( email, senha );
    }


    return (
        <ScrollView contentContainerStyle={css.container}>
            {!cadastro ?
            <>
            <Text style={css.title}>Find Me</Text>
            <TextInput
                inputMode="email"
                placeholder="Email do Usuário"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="white"
            />
            <TextInput
                inputMode="text"
                placeholder="Senha"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="white"
            />
            <View style={css.forgot}>
                <Text style={css.forgotText}>Esqueceu a senha?</Text>
            </View>
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={css.btnLogin} onPress={()=> setCadastro(true)}>
                <Text style={css.btnLoginText}>Cadastrar</Text>
            </TouchableOpacity>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                </View>
            }
            </>
            : 
            <Inserir
            setCadastro={setCadastro}/>}
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#2A2A2A"
    },

    title:{

        color: "white",
        fontSize: 30,

        
    },

    logo: {
        width: "60%",
        resizeMode: "contain"
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#262626",
        color: "white"
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "white",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30, 
        backgroundColor: "#58C470",
        
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    }
});