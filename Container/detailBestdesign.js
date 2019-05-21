import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { styles } from '../assets/styles/styles';

export default class DetailBestdesign extends Component{

    render(){

        return(
            <ScrollView>
                <Image source={require('../assets/images/home/couch-1835923_1920.jpg')} />
                <View style={styles.dBdContainer}>
                    <Text style={styles.dBdTitle}>
                        Soft American Style
                    </Text>
                    <Text style={styles.dBdsubTitle}>
                        Living Room
                    </Text>
                    <View>
                        <View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}