import {StyleSheet} from 'react-native'

const color  = {
    white : "#fff"
}

export const styles = StyleSheet.create({
    container : {
        
        backgroundColor : color.white
    },
    logo : {
        alignItems : 'center',
    },
    img_logo : {
        width : 100,
        height : 100,
        marginTop : 100
    },
    vinpText : {
        marginTop : 25,
        paddingHorizontal : 25
    },
    inpText : { 
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: '#007acc',
        height : 60 
    },
    inpTitle : {
        marginBottom : 10,
        fontSize : 17
    }
}) 



