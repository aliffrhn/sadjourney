import React, { Component } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { styles } from './styles'

export default class Home extends Component{

    render(){

        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Image></Image>
                </View>
            </ScrollView>
        )
    }
}
