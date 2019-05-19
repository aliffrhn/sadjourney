import React, {Component} from 'react'
import {View,Text,ScrollView, TextInput} from 'react-native'
import {styles, color} from './styles'

import Listcat from './components/Listcat'
import InputBoxLogin from './inputBoxlogin'

export default class CategoriesContainer extends Component{

    render(){

        return(
            <ScrollView>
                <View style = {styles.hcatcontainer}>
                    <Text style = {styles.hCategories}>
                        Categories
                    </Text>
                </View>
                <View style = {{backgroundColor : color.white}}>
                    <View style = {styles.vsinpText}>
                        <TextInput style = {styles.sinpText} placeholder = 'Search Your Design' />
                    </View>
                    <Listcat />
                </View>
            </ScrollView>
        )
    }
}