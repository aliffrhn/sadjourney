import React, {Component} from 'react'
import {View,TextInput,Text} from 'react-native'

import {styles} from './styles.js'

export default class InputBoxlogin extends Component {

    render(){
        return(
          <View style = {styles.vinpText}>
            <Text style = {styles.inpTitle}>{this.props.title}</Text>
            <TextInput style = {styles.inpText} keyboardType = {this.props.keytype} secureTextEntry = {this.props.secure} placeholder = {this.props.placeholder} />
          </View>
        )
    }
}