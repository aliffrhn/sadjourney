import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, Picker } from 'react-native'

import InputBoxlogin from './inputBoxlogin.js'
import { styles } from './styles.js' 

export default class SignupContainer extends Component{

    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                <View style = {styles.logo}><Image style={styles.img_logo} source={require('./images/signup/2.png')}/></View>
                <InputBoxlogin style = {{marginTop : 50}} title = 'Full Name' placeholder = '    Full name'/>
                <InputBoxlogin title = 'Handphone' placeholder = '    Example: 0881228922984'/>
                <InputBoxlogin title = 'Email' placeholder = '    Email'/>
                <InputBoxlogin title = 'Password' placeholder = '    Password'/>
                <View style = {styles.vinpText}>
                    <Text style = {styles.inpTitle}>Gender</Text>
                    <Picker>
                    <Picker.Item label='Male' value='1' />
                    <Picker.Item label='Female' value='2' />
                    </Picker>
                </View>
                <TouchableOpacity style = {styles.btnSignup}
                onPress={() => this.props.navigation.navigate('Signin')}>
                <View style = {styles.btnText}>
                    <Text style = {styles.btnStext}>
                        Sign Up
                    </Text>
                </View>
                </TouchableOpacity>
                <View style = {styles.hlinkSignin}>
                    <Text>
                        Have an account? 
                    </Text>
                    <TouchableOpacity>
                        <Text>
                            Sign In 
                        </Text>
                    </TouchableOpacity>    
                </View>
                </View>
            </ScrollView>
        )
    }
}