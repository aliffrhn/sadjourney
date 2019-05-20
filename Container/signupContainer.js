import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, Picker } from 'react-native'
import { styles, color } from '../assets/styles/styles' 

// Import Components
import InputBoxlogin from '../Components/inputBoxlogin'

export default class SignupContainer extends Component{

    render(){
        
        return(
            <ScrollView>
                <View style = {styles.container}>
                <View style = {styles.logo}><Image style={styles.img_logo} source={require('../assets/images/signup/2.png')}/></View>
                <InputBoxlogin style = {{marginTop : 50}} title = 'Full Name'  placeholder = 'Full name'/>
                <InputBoxlogin title = 'Handphone' keytype = 'number-pad' placeholder = 'Example: 0881228922984'/>
                <InputBoxlogin title = 'Email' placeholder = 'Email'/>
                <InputBoxlogin title = 'Password' secure = {true} placeholder = 'Password'/>
                <View style = {styles.vinpText}>
                    <Text style = {styles.inpTitle}>Gender</Text>
                    <Picker>
                    <Picker.Item label='Male' value='1' />
                    <Picker.Item label='Female' value='2' />
                    </Picker>
                </View>
                <TouchableOpacity style = {styles.btnSignup}>
                <View style = {styles.btnText}>
                    <Text style = {styles.btnStext}>
                        Sign Up
                    </Text>
                </View>
                </TouchableOpacity>
                <View style = {styles.hlinkSignin}>
                    <Text style = {{marginRight : 5}}>
                        Have an account? 
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')}>
                        <Text style={{color : color.blue}}>
                            Sign In 
                        </Text>
                    </TouchableOpacity>    
                </View>
                </View>
            </ScrollView>
        )
    }
}