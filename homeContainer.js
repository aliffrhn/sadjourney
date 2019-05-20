import React, { Component } from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import { styles, color } from './styles'

import Listbd from './Components/Listbd'
import Listtrd from './Components/Listtrd';

export default class Home extends Component{
    //TODO: BIKIN STATE for icon love
    state = {
        ilove: false
    }
    render(){

        return(
            <ScrollView>
                <View style = {styles.hcontainer}>
                    <View style = {styles.headerPer}>
                        <Image style = {styles.personImg} source = {require('./images/home/person.jpg')}/>
                        <View style = {styles.personNT}>
                            <Text style = {styles.personName}>
                                Anika Putri
                            </Text>
                            <Text style = {styles.personDesc}>
                                Let's design your home!
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.bestDesign}>
                        <Text style = {styles.tbestDesign}>
                            Best Design
                        </Text>
                    </View>
                </View>
                <View style = {{backgroundColor : color.white}}>
                    <Listbd />
                </View>
                <View style = {styles.hcontainer}>
                    <View>
                        <View style = {styles.trndCard}> 
                            <View>
                                <Text style = {{fontSize : 17, fontWeight : 'bold', color : 'black'}}>
                                    Trending
                                </Text>
                            </View>
                            <View style = {{justifyContent : 'flex-end', marginLeft : 190}}>
                                <TouchableOpacity onPress = {() => this.props.navigation.navigate('DetailT')} >
                                    <Text style = {{color : color.blue}}>
                                        See More
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Listtrd />
                    </View> 
                </View>
            </ScrollView>
        )
    }
}
