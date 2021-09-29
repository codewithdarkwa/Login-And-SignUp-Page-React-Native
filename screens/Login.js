import React,{useState} from 'react'
import { StyleSheet, Text, View,Image, Button } from 'react-native'
import {Input} from 'react-native-elements'

const Login = () => {
const [email, setemail]= useState("");
const [password, setpassword]= useState("");

    return (
        <View style={styles.container}>
            <Image 
            source={require('../assets/logo.jpg')}
            style={{width:200, height:150,marginTop:50}}
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
           placeholderTextColor="black"
           value={password}
           type="text"
           onChangeText={(text)=>setpassword(text)}
           leftIcon={{type:"material",name:"lock"}}
           
           />
           <Button title="Login" color="brown"/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       backgroundColor:"darkcyan"
    }
})
