import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/styles'

const show_first = [
    {
        key: '1',
        name:'Squarely Balcony',
        category: 'Balcony',
        image:require('../assets/images/home/squarely-1354291-unsplash.jpg')
    },
    {
        key: '2',
        name:'Faith Gray',
        category: 'Living Room',
        image:require('../assets/images/home/livroom.jpg')
    },
    {
        key: '3',
        name:'Falco Negenman',
        category: 'Backyard',
        image:require('../assets/images/home/falco-negenman-676806-unsplash.jpg')
    }
]

export default class ListBestdesign extends Component{

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
                                {item.category}
                            </Text>
                        </View>
                        <View style = {styles.tbtnContainer}>
                            <TouchableOpacity style = {styles.tCard} onPress = {()=> this.props.navigation.navigate('Bestdesign')}>
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