import { StyleSheet } from "react-native"
import { accentColor, primaryColor, secondaryColor } from "../Colors";

//All page specific styles are found in that page's specific file, here you can find
//styles which can be used by all the pages.

//mainStyles used by all the pages in the app
const mainStyles = StyleSheet.create({
    background: {
        backgroundColor: primaryColor,
        paddingTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    justFont : {
        fontFamily: 'Jua-Regular'
    },
    modal : {
        backgroundColor : secondaryColor,
        width : '90%',
        padding : '6%',
        borderWidth : 3,
        borderColor : 'white',
        borderRadius : 6,
        position : 'absolute',
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : '60%',
    },
    text: {
        fontFamily: 'Jua-Regular',
        marginLeft: 10,
        alignSelf: 'flex-start',
        fontSize: 26,
        color: 'white'
    },
    textBox : {
        fontFamily: 'Jua-Regular',
        width: '90%',
        backgroundColor : primaryColor,
        borderColor : 'white',
        borderWidth : 3,
        borderStyle : 'solid',
        borderRadius : 8,
        color : 'white',
        fontSize : 26,
        padding : 6,
        textAlign : 'center'
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Jua-Regular',
    },
    header : {
        display : 'flex',
        flexDirection: 'row',
        paddingLeft : 20,
        paddingRight : 20,
    },
    balanceAmtLabel : {
        fontSize: 60,
        textAlign : 'center',
        color: accentColor,
        fontFamily: 'Jua-Regular',
    }
})

export default mainStyles;