import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView} from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                    source={require('../../Images/Octocat.png')} />

                    <Text style={styles.title}>Login Template</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498db'
    },
    logo:{
        width:100,
        height:100
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1
    },
    title:{
        color:'#FFF',
        fontSize:25,
        opacity:0.8
    },
    formContainer:{

    }
});