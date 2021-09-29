import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from './screens/Login'
import Register from './screens/Register'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    ) 
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
