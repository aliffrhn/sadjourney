import React, { Component } from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import { styles, color } from './styles'

export default class Home extends Component{

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
                        <View style = {styles.bdContainer}>
                            <Image style = {styles.bdCard} source = {require('./images/home/livroom.jpg')}/>
                            <View style = {styles.desContainer}>
                                <View style = {styles.desCard}>
                                    <View>
                                        <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'black'}}>
                                            American Style
                                        </Text>
                                        <Text style = {{marginTop : 1}}>
                                            23 style design
                                        </Text>
                                    </View>
                                    <View style = {{justifyContent : 'center', marginLeft : 45}}>
                                        <TouchableOpacity style = {{backgroundColor : color.blue, borderRadius : 35/2, height: 35, width : 35}}>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View > 
                        <Text>
                            Trending
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
