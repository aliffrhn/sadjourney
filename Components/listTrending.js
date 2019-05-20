import React, { Component } from 'react'
import { View, FlatList, Image, TouchableOpacity } from 'react-native'
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

export default class ListTrending extends Component{

    _renderitems(item){
        return(
            <View>
                <Image style={styles.trndimg} source={item.image} />
                <View style={styles.ilovecontainer}>
                    <TouchableOpacity>
                        <Image style={styles.ilovetrnd} source={require('../assets/icons/likep.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render(){

        return(
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator = {false}
                ItemSeparatorComponent={() => <View style={{width : 20}}></View>}
                data = {show_first}
                renderItem = {({item}) => this._renderitems(item)}
            />
        )
    }
}