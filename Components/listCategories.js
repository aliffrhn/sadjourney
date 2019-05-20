import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/styles'

const show_first = [
    {
        key: '1',
        name:'America',
        image:require('../assets/images/home/carpet-1853203_1920.jpg')
    },
    {
        key: '2',
        name:'America',
        image:require('../assets/images/home/chairs-2181960_1920.jpg')
    },
    {
        key: '3',
        name:'America',
        image:require('../assets/images/home/couch-447484_1920.jpg')
    },
    {
        key: '4',
        name:'America',
        image:require('../assets/images/home/couch-1835923_1920.jpg')
    },
    {
        key: '5',
        name:'Americano',
        image:require('../assets/images/home/kitchen-2165756_1920.jpg')
    },
    {
        key: '6',
        name:'Americano',
        image:require('../assets/images/home/living-room-2155376_1920.jpg')
    },
]

export default class ListCategories extends Component{

    _renderItems(item){
        
        return(
            <View style = {styles.catvContainer}>
                <Image style = {styles.catCard} source = {item.image}/>
                <View style = {styles.catContainer}>
                    <View style = {styles.descatCard}>
                        <View style = {styles.descatcard}>
                            <Text style = {styles.hCard}>
                                {item.name}
                            </Text>
                            <Text style = {{marginTop : 1}}>
                                23 style design
                            </Text>
                        </View>
                        <View style = {styles.tbtnContainer}>
                            <TouchableOpacity style = {styles.tCard}>
                                <Image style = {styles.tbtnCard} source = {require('../assets/icons/next.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render(){

        return(
            <View>
                <FlatList 
                    renderItem = {({item}) => this._renderItems(item)}
                    data = {show_first}
                />
            </View>
        )
    }
}