import React, {Component} from 'react'
import {Button, View, Image, TextInput, Text, ScrollView, Picker} from 'react-native'
import { RadioButton } from 'react-native-paper'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import {styles} from './styles'

export default class App extends Component{
  
  state = {
    checked: 'first',
  };

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
            <Text style = {styles.inpTitle}>Handphone</Text>
            <TextInput style = {styles.inpText} placeholder = '    Example: 0881228493462'/>
          </View>
          <View style = {styles.vinpText}>
            <Text style = {styles.inpTitle}>Email</Text>
            <TextInput style = {styles.inpText} placeholder = '    Email'/>
          </View>
          <View style = {styles.vinpText}>
            <Text style = {styles.inpTitle}>Password</Text>
            <TextInput style = {styles.inpText} placeholder = '    Password'/>
          </View>
          <View style = {styles.vinpText}>
            <Text style = {styles.inpTitle}>Gender</Text>
            <Picker>
              <Picker.Item label='Male' value='1' />
              <Picker.Item label='Female' value='2' />
            </Picker>
          </View>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </ScrollView>
    )
  }

}