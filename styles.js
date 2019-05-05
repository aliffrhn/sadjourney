import {StyleSheet} from 'react-native'

export const color  = {
    white : '#fff',
    blue : '#72a5ff'
}

export const styles = StyleSheet.create({
    container : {
        backgroundColor : color.white,
        paddingBottom : 35
    },
    logo : {
        alignItems : 'center',
    },
    img_logo : {
        width : 200,
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
        borderColor: color.blue,
        height : 60,
        paddingHorizontal : 25
    },
    inpTitle : {
        marginBottom : 10,
        fontSize : 17
    },
    btnSignup : {
        marginTop : 30,
        borderRadius: 40,
        backgroundColor : color.blue,
        height : 60,
        marginHorizontal : 25
    },
    btnText : {
        alignItems : 'center',
        padding : 15
    },
    btnStext : {
        fontSize : 20,
        color : color.white
    },
    hlinkSignin : {
        justifyContent : 'center',
        marginTop : 10,
        flexDirection : 'row'
    },
    aForgotp : {
        marginTop : 30,
        marginRight : 25,
        alignItems : 'flex-end',
    }
}) 



