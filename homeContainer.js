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
                                        <Text style = {styles.hCard}>
                                            American Style
                                        </Text>
                                        <Text style = {{marginTop : 1}}>
                                            23 style design
                                        </Text>
                                    </View>
                                    <View style = {styles.tbtnContainer}>
                                        <TouchableOpacity style = {styles.tCard}>
                                            <Image style = {styles.tbtnCard} source = {require('./images/icons/next.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.trndCard}> 
                        <View>
                            <Text style = {{fontSize : 17, fontWeight : 'bold', color : 'black'}}>
                                Trending
                            </Text>
                        </View>
                        <View style = {{justifyContent : 'flex-end', marginLeft : 190}}>
                            <TouchableOpacity >
                                <Text style = {{color : color.blue}}>
                                    See More
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
