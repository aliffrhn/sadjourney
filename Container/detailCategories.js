import React , { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from '../assets/styles/styles'
import ListDetailcategories from '../Components/listDetailcategories';

export default class DetailCategories extends Component{

    render(){
        return(
            <ScrollView>
                <View style = {styles.detailCatcontainer}>
                    <Text style = {styles.hCategories}>
                        Living Room
                    </Text>            
                </View>
                    <ListDetailcategories />
            </ScrollView>
        )
    }
}