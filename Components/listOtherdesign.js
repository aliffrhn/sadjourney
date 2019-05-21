import React, { Component } from 'react'
import { Image , TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../assets/styles/styles';

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

export default class ListOtherdesign extends Component{

    _renderItem(item){
        
        return(
            <Image style={styles.imglistOtherd} source={item.image}/>
        )
    }

    render(){

        return(
            <FlatList
                horizontal
                renderItem = {({item}) => this._renderItem(item)}
                data = {show_first}
            />
        )
    }
}