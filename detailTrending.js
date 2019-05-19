import React, {Component} from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import {styles, color} from './styles' 

import Listdtrd from './components/Listdtrd'

export default class DetailTrending extends Component{
    
    render(){
        
        return(
            <ScrollView>
                <View style = {styles.hcontainer}>
                    <Text style = {styles.htrnd}>
                        Trending
                    </Text>  
                    <Listdtrd />              
                </View>
            </ScrollView>
        )
    }
}