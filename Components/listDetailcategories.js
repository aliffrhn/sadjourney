import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
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

export default class ListDetailcategories extends Component{

    _renderItems(item){
        
        return(
            <View style = {styles.dtrndCard}>
                <View style = {styles.dtrndimgCard}>
                    <Image style={styles.dtrndimg} source={item.image}/>
                    <View style={styles.ilovedcontainer}>
                        <TouchableOpacity>
                            <Image style={styles.ilovetrnd} source={require('../assets/icons/likep.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.dtrnddesCard}>
                    <View style= {styles.dtrndheadCard}>
                        <View style = {styles.dtrndboxHeader}>
                            <Text style = {styles.dtrndheader}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={styles.colorpaldTrnd}>
                            <View style={styles.colorpaloneTrnd}/>
                            <View style={styles.colorpaltwoTrnd}/>
                            <View style={styles.colorpalthreeTrnd}/>
                        </View> 
                    </View>
                    <Text style = {styles.dtrnddDesc}>
                        This is a design living room for 4 x 4 m. 
                        Theme of this room is American style. 
                        The color is very soft and beautiful. 
                        Theme of this room is American style. 
                        The color is very soft and beautiful.
                    </Text>
                    <Text style = {styles.dtrnddPrice}>
                        Rp.500.000,00
                    </Text>
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