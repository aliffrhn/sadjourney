import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/styles'

const show_first = [
    {
        key: '1',
        name:'Living Room',
        image:require('../assets/images/home/living-room-2155376_1920.jpg')
    },
    {
        key: '2',
        name:'Kitchen',
        image:require('../assets/images/home/kitchen-2165756_1920.jpg')
    },
    {
        key: '3',
        name:'Dining Room',
        image:require('../assets/images/home/dining-room-397197_1280.jpg')
    },
    {
        key: '4',
        name:'Balcony',
        image:require('../assets/images/home/simone-baldo-742261-unsplash.jpg')
    },
    {
        key: '5',
        name:'Bathroom',
        image:require('../assets/images/home/filios-sazeides-1460940-unsplash.jpg')
    }
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