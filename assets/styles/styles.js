import {StyleSheet} from 'react-native'

export const color  = {
    white : '#fff',
    blue : '#72a5ff',
    black : '#000000'
}

export const styles = StyleSheet.create({
    bgcolorwhite : {
        backgroundColor : color.white
    },
    colorblue : {
        color : color.blue
    },
    padBot20 : {
        paddingBottom : 20
    },
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
    haveacc : {
        marginRight : 5
    },
    linknothacc : {
        marginRight : 5
    },
    aForgotp : {
        marginTop : 30,
        marginRight : 25,
        alignItems : 'flex-end',
    },
    hcontainer : {
        backgroundColor : color.white,
        paddingBottom : 35,
        paddingTop : 1,
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
        paddingBottom : 30,
        marginHorizontal : 20
    },
    desContainer : {
        position : 'absolute',
        width : 250,
        height : 75,
        borderRadius : 7,
        backgroundColor : 'white',
        top : 350,
        left : 45,
        // shadow
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    desCard : {
        padding : 13,
        flexDirection : 'row'
    },
    desbcard : {
        width : 180
    },
    hCard : {
        fontSize : 20,
        fontWeight : 'bold', 
        color : 'black'
    },
    tbtnContainer : {
        justifyContent : 'center'
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
    listBdcontainer : {
        backgroundColor : color.white,
        paddingBottom : 2,
        paddingLeft : 25
    },
    trndCard : {
        flexDirection : 'row',
        paddingTop : 27,
        paddingBottom : 20
    },
    trndHeader : {
        fontSize : 22,
        fontWeight : 'bold',
        color : color.black
    },
    trndsmContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 190
    },
    listtrndContainer : {
        marginHorizontal : 15
    },
    trndimg : {
        width : 210,
        height : 210,
        borderRadius : 4
    },
    ilovetrnd : {
        height : 30,
        width : 30
    },
    colorpaldTrnd : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    colorpaloneTrnd : {
        backgroundColor : '#dcbf85',
        width : 20,
        height : 20,
        borderRadius : 20/2
    },
    colorpaltwoTrnd : {
        backgroundColor : '#8c9e9d',
        width : 20,
        height : 20,
        borderRadius : 20/2,
        marginLeft : 5
    },
    colorpalthreeTrnd : {
        backgroundColor : '#131514',
        width : 20,
        height : 20,
        borderRadius : 20/2,
        marginLeft : 5
    },
    trndTitle : {
        marginTop : 6,
        fontSize : 16,
        fontWeight : 'bold',
        color : color.black
    },
    ilovecontainer : {
        position : 'absolute',
        top : 20,
        left : 160
    },
    htrnd : {
        marginTop : 30,
        fontSize : 25,
        color : color.black,
        fontWeight : 'bold'
    },
    dtrndimg : {
        width : 350,
        height : 225,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderRadius : 7
    },
    ilovedcontainer : {
        position : 'absolute',
        top : 35,
        left : 290
    },
    dtrndCard : {
        marginBottom : 35,
        marginHorizontal: 25,
        width : 350,
        height : 400,
        borderRadius : 10,
        backgroundColor : color.white,
        // shadow
        elevation: 8
    },
    dtrndimgCard : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    dtrnddesCard : {
        marginHorizontal : 10
    },
    dtrndheadCard : {
        flexDirection : 'row',
        marginTop : 8
    },
    dtrndboxHeader : {
        width : 250
    },
    dtrndheader : {
        fontSize : 19,
        fontWeight : 'bold',
        color : color.black
    },
    dtrnddDesc : {
        textAlign : 'justify',
        width : 320,
        lineHeight : 20,
        marginTop : 12
    },
    dtrnddPrice : {
        fontSize : 17,
        fontWeight : 'bold',
        color : color.black,
        marginTop : 8
    },
    hcatcontainer : {
        backgroundColor : color.white,
        paddingBottom : 35,
        paddingTop : 25,
        paddingLeft : 25,
        paddingRight : 25
    },
    hCategories : {
        fontSize : 25,
        color : color.black,
        fontWeight : 'bold'
    },
    catCard : {
        height : 140,
        width : 350,
        borderRadius : 10,
    },
    catvContainer : {
        marginBottom : 48,
        paddingBottom : 30,
        marginHorizontal : 20
    },
    catContainer : {
        position : 'absolute',
        width : 318,
        height : 66,
        borderRadius : 7,
        backgroundColor : 'white',
        top : 120,
        left : 16,
        // shadow
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    descatCard : {
        paddingLeft : 15,
        paddingVertical : 8,
        flexDirection : 'row'
    },
    descatcard : {
        marginRight : 140
    },
    vsinpText : {
        marginBottom : 35,
        paddingHorizontal : 16
    },
    sinpText : { 
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: color.blue,
        paddingHorizontal : 25
    },
    imgdbd : {
        width : 395,
        height : 300
    },
    dBdContainer : {
        backgroundColor : color.white,
        marginHorizontal : 20
    },
    dBdTitle : {
        marginTop : 20,
        fontSize : 22,
        fontWeight : 'bold',
        color : color.black
    },
    dBdsubTitle : {
        marginTop : 5,
        fontSize : 15,
    },
    colorpaldBd : {
        flexDirection : 'row',
        paddingVertical : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    colorpalone : {
        backgroundColor : '#dcbf85',
        width : 75,
        height : 75,
        borderRadius : 75/2
    },
    colorpaltwo : {
        backgroundColor : '#8c9e9d',
        width : 75,
        height : 75,
        borderRadius : 75/2,
        marginLeft : 20
    },
    colorpalthree : {
        backgroundColor : '#131514',
        width : 75,
        height : 75,
        borderRadius : 75/2,
        marginLeft : 20
    },
    descriptiondBd : {
        fontSize : 16,
        textAlign : 'justify',
        lineHeight : 22
    },
    otherDesignheader : {
        fontSize : 17,
        marginVertical : 22,
        fontWeight : 'bold',
        color : color.black
    },
    imglistOtherd : {
        borderRadius : 10,
        marginHorizontal : 10,
        width : 150,
        height : 150
    }
}) 