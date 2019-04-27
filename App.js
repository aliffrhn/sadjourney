import React, {Component} from 'react'
import {View, Image, TextInput, Text, ScrollView} from 'react-native'

import {styles} from './styles'

export default class App extends Component{
  
  render(){
    return(
      <ScrollView>
        <View style = {styles.container}>
          <View style = {styles.logo}><Image style={styles.img_logo} source={require('./images/signup/1.jpg')}/></View>
          <View style = {[styles.vinpText, {marginTop : 50}]}>
            <Text style = {styles.inpTitle}>Full Name</Text>
            <TextInput style = {styles.inpText} placeholder = '    Full name'/>
          </View>
          <View style = {styles.vinpText}>
            <Text style = {styles.inpTitle}>Email</Text>
            <TextInput style = {styles.inpText} placeholder = '    Email'/>
          </View>
        </View>
      </ScrollView>
    )
  }

}