import { StyleSheet } from "react-native";

export const budgetStyles = StyleSheet.create({
    scrollView : {
        width : '100%',
        marginLeft : '10%',
    },
    budgetCategoryCard : {
        width : '90%',
        height : 90,
        padding : 6,
        marginTop : 10,
        backgroundColor : '#1D171D',
        borderWidth : 4,
        borderColor : '#ffffff',
        borderRadius : 12,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
    },
    budgetUsedText : {
        position : 'absolute',
        top : 3,
        left : 10,
        color : 'white'
    },
    budgetAllocatedText : {
        position : 'absolute',
        top : 3,
        right : 10,
        color : 'white'
    }
});