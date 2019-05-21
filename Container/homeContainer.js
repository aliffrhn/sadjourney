import React, { Component } from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import { styles, color } from '../assets/styles/styles'

// Import Components
import ListBestdesign from '../Components/listBestdesign'
import ListTrending from '../Components/listTrending'

export default class Home extends Component{
    //TODO: BIKIN STATE for icon love
    state = {
        ilove: false
    }
    render(){

        return(
            <ScrollView>
                <View style = {[styles.hcontainer,{paddingTop : 35}]}>
                    <View style = {styles.headerPer}>
                        <Image style = {styles.personImg} source = {require('../assets/images/home/person.jpg')}/>
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
                <View style = {styles.bgcolorwhite}>
                    <ListBestdesign />
                </View>
                <View style = {styles.listBdcontainer}>
                    <View>
                        <View style = {styles.trndCard}> 
                            <View>
                                <Text style = {{fontSize : 22, fontWeight : 'bold', color : 'black'}}>
                                    Trending
                                </Text>
                            </View>
                            <View style = {{justifyContent : 'center', alignItems : 'center', marginLeft : 190}}>
                                <TouchableOpacity onPress = {() => this.props.navigation.navigate('DetailT')} >
                                    <Text style = {{color : color.blue}}>
                                        See More
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style = {[styles.bgcolorwhite, {paddingBottom : 20}]}>
                    <ListTrending />
                </View>
            </ScrollView>
        )
    }
}
