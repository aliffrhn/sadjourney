import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/styles'

import ListOtherdesign from '../Components/listOtherdesign'

export default class DetailBestdesign extends Component{

    render(){

        return(
            <ScrollView>
                <Image style={styles.imgdbd} source={require('../assets/images/home/couch-1835923_1920.jpg')} />
                <View style={styles.dBdContainer}>
                    <Text style={styles.dBdTitle}>
                        Soft American Style
                    </Text>
                    <Text style={styles.dBdsubTitle}>
                        Living Room
                    </Text>
                    <View style={styles.colorpaldBd}>
                        <View style={styles.colorpalone}/>
                        <View style={styles.colorpaltwo}/>
                        <View style={styles.colorpalthree}/>
                    </View>
                    <Text style={styles.descriptiondBd}>
                        This is a design living room for 4 x 4 m. 
                        Theme of this room is American style. 
                        The color is very soft and beautiful. 
                        Theme of this room is American style. 
                        The color is very soft and beautiful.
                    </Text>
                    <TouchableOpacity style = {styles.btnSignup} onPress = {() => this.props.navigation.navigate('Home')}>
                        <View style = {styles.btnText}>
                            <Text style = {styles.btnStext}>
                            Book now
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.otherDesignheader}>
                        Other Design
                    </Text>
                </View>
                <ListOtherdesign/>
                <View style={styles.padBot20}/>
            </ScrollView>
        )
    }
}