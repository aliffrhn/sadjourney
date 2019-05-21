import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from '../assets/styles/styles'

// Import Components
import ListDetailtrending from '../Components/listDetailtrending'

export default class DetailTrending extends Component{
    
    render(){
        
        return(
            <ScrollView>
                <View style = {styles.hcontainer}>
                    <Text style = {styles.htrnd}>
                        Trending
                    </Text>            
                </View>
                    <ListDetailtrending />
            </ScrollView>
        )
    }
}