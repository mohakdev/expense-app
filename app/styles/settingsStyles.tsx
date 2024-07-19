import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../colors";

const settingStyles = StyleSheet.create({
    wrapperView : {
        flex : 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    categoryModal : {
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
    categoryTextBox : {
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
    currencyModal : {
        alignSelf : 'center',
        backgroundColor : secondaryColor,
        position : 'absolute',
        marginTop : '50%',
        width : '80%',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 12,
        borderWidth: 3,
        borderColor : 'white',
    },
    currencyHeader : {
        fontSize : 34 ,
        color : 'white',
    },
    cuurencyBtn : {
        marginTop : 10,
    },
    currencyText : {
        fontSize : 28 ,
        color : 'white',
    }
})

export default settingStyles;