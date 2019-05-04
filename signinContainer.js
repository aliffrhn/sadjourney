import React, {Component} from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { styles, color } from './styles';

import InputBoxLogin from './inputBoxlogin.js'

export default class SigninContainer extends Component{
    
    render(){
        
        return(
            <View style = {styles.container}>
                <View style = {styles.logo}><Image style={styles.img_logo} source={require('./images/signup/2.png')}/></View>
                <InputBoxLogin title = 'Email' placeholder = '    Email' />
                <InputBoxLogin title = 'Password' placeholder = '    Password'/>
                <TouchableOpacity style = {styles.btnSignup}>
                    <View style = {styles.btnText}>
                        <Text style = {styles.btnStext}>
                        Sign In
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Text style={{color : color.blue}}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}