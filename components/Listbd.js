import React, {Component} from 'react'
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native'

import { styles } from '../styles.js'

const show_first= [
    {
        key: '1',
        name:'America',
        image:require('../images/home/carpet-1853203_1920.jpg')
    },
    {
        key: '2',
        name:'America',
        image:require('../images/home/chairs-2181960_1920.jpg')
    },
    {
        key: '3',
        name:'America',
        image:require('../images/home/couch-447484_1920.jpg')
    },
    {
        key: '4',
        name:'America',
        image:require('../images/home/couch-1835923_1920.jpg')
    },
    {
        key: '5',
        name:'Americano',
        image:require('../images/home/kitchen-2165756_1920.jpg')
    },
    {
        key: '6',
        name:'Americano',
        image:require('../images/home/living-room-2155376_1920.jpg')
    },
]

export default class Listbd extends Component{

    _renderItem(item){
        
        return(
            <View style = {styles.bdContainer}>
                <Image style = {styles.bdCard} source = {item.image}/>
                <View style = {styles.desContainer}>
                    <View style = {styles.desCard}>
                        <View style = {styles.desbcard}>
                            <Text style = {styles.hCard}>
                                {item.name}
                            </Text>
                            <Text style = {{marginTop : 1}}>
                                23 style design
                            </Text>
                        </View>
                        <View style = {styles.tbtnContainer}>
                            <TouchableOpacity style = {styles.tCard}>
                                <Image style = {styles.tbtnCard} source = {require('../images/icons/next.png')}/>
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
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // ItemSeparatorComponent={() => <View style={{marginHorizontal : 20}}/>}
                    renderItem={({item}) => this._renderItem(item)}
                    data={show_first}
                />
            </View>
        )
    }
}