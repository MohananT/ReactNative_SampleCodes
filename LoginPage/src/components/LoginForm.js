import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity,Text} from 'react-native'

class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="username"
                placeholderTextColor="rgba(255,255,255,0.7)" returnKeyType='next'>
                </TextInput>
                <TextInput style={styles.input} placeholder="password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry returnKeyType='go'>
                </TextInput>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    input:{
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:10,
        color:'#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:10
    },
    buttonText:{
        textAlign:'center',
        color:'#FFF',
        fontWeight:'700'
    }
});

export default LoginForm;

