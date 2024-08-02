import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../Colors";

const settingStyles = StyleSheet.create({
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