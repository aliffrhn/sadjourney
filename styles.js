import {StyleSheet} from 'react-native'

export const color  = {
    white : '#fff',
    blue : '#72a5ff',
    black : '#000000'
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
    },
    hcontainer : {
        backgroundColor : color.white,
        paddingBottom : 35,
        paddingTop : 25,
        paddingLeft : 25
    },
    headerPer : {
        flexDirection : 'row'
    },
    personImg : {
        height : 65,
        width : 65,
        borderRadius : 65 / 2
    },
    personNT : {
        marginLeft : 15
    },
    personName : {
        fontSize : 20,
        fontWeight : 'bold',
        color : color.black
    },
    personDesc : {
        marginTop : 13,
        color : color.black
    },
    bestDesign : {
        marginTop : 50
    },
    tbestDesign : {
        fontSize : 27,
        fontWeight : 'bold',
        color : color.black
    },
    bdCard : {
        height : 400,
        width : 340,
        borderRadius : 10,
    },
    bdContainer : {
        marginTop : 25
    },
    desContainer : {
        position : 'absolute',
        width : 250,
        height : 75,
        borderRadius : 7,
        backgroundColor : 'white',
        top : 350,
        left : 45,
    },
    desCard : {
        padding : 13,
        flexDirection : 'row'
    },
    hCard : {
        fontSize : 20,
        fontWeight : 'bold', 
        color : 'black'
    },
    tbtnContainer : {
        justifyContent : 'center',
        marginLeft : 45
    },
    tCard : {
        backgroundColor : color.blue, 
        borderRadius : 35/2,
        height: 35,
        width : 35
    },
    tbtnCard : {
        height : 19,
        width : 19,
        left : 9,
        top : 8
    },
    trndCard : {
        marginTop : 60,
        flexDirection : 'row'
    }
}) 



