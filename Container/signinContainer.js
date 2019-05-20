import React, {Component} from 'react'
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import { styles, color } from '../assets/styles';

import InputBoxLogin from './inputBoxlogin.js'

export default class SigninContainer extends Component{
    
    render(){
        
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <View style = {styles.logo}><Image style={styles.img_logo} source={require('./images/signup/2.png')}/></View>
                    <InputBoxLogin title = 'Email' placeholder = 'Email' />
                    <InputBoxLogin title = 'Password' placeholder = 'Password'/>
                    <TouchableOpacity style = {styles.aForgotp} onPress={() => this.props.navigation.navigate('')}>
                        <Text style = {{color : color.blue}}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btnSignup} onPress = {() => this.props.navigation.navigate('HomeC')}>
                        <View style = {styles.btnText}>
                            <Text style = {styles.btnStext}>
                            Sign In
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style = {styles.hlinkSignin}>
                    <Text style = {{marginRight : 5}}>
                        Don't Have an account? 
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')}>
                        <Text style={{color : color.blue}}>
                            Sign Up 
                        </Text>
                    </TouchableOpacity>    
                </View>
                </View>
            </ScrollView>
        )
    }
}