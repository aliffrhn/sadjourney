import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/styles'

const show_first = [
    {
        key: '1',
        name:'Becca Tapert',
        image:require('../assets/images/home/becca-tapert-1561351-unsplash.jpg')
    },
    {
        key: '2',
        name:'Daniel Silantev',
        image:require('../assets/images/home/daniil-silantev-574966-unsplash.jpg')
    },
    {
        key: '3',
        name:'Jared Ricev',
        image:require('../assets/images/home/jared-rice-408402-unsplash.jpg')
    },
]

export default class ListTrending extends Component{

    _renderitems(item){
        return(
            <View style = {styles.listtrndContainer}>
                <Image style={styles.trndimg} source={item.image} />
                <View style={styles.ilovecontainer}>
                    <TouchableOpacity>
                        <Image style={styles.ilovetrnd} source={require('../assets/icons/likep.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.trndTitle}>
                    {item.name}
                </Text>
            </View>
        )
    }

    render(){

        return(
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator = {false}
                data = {show_first}
                renderItem = {({item}) => this._renderitems(item)}
            />
        )
    }
}