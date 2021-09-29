import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react'
import { StyleSheet, Text, View,Button,Image, KeyboardAvoidingView } from 'react-native'
import {Input} from 'react-native-elements'

const Register = ({navigation}) => {
    const [email, setemail]= useState("");
    const [password, setpassword]= useState("");
    const [username, setusername]= useState("");

const Login=()=>{
    if (username.length==0 ||password.length==0 ||email.length==0) {
        alert("Required field missing");
    }
    else 
    navigation.navigate("Login");
}

    return (
    <KeyboardAvoidingView style={styles.container}>
            <Image 
            source={require('../assets/logo.jpg')}
            style={{width:200, height:150,marginTop:50}}
            />
             <Input 
           placeholder="Username"
           leftIcon={{type:"material",name:"person"}}
           value={username}
           type="username"
           placeholderTextColor="black"
           onChangeText={(text)=>setusername(text)} 
           
        />
           <Input
           placeholder="Email"
           leftIcon={{type:"material",name:"email"}}
           value={email}
           placeholderTextColor="black"
           type="email"
           onChangeText={(text)=>setemail(text)}

           />
               <Input 
           placeholder="Password"
           value={password}
           placeholderTextColor="black"
           type="text"
           onChangeText={(text)=>setpassword(text)}
           leftIcon={{type:"material",name:"lock"}}
           
           />
           <Button title="Register" color="brown" onPress={Login}/>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"darkcyan"
    }
})
