import { StyleSheet } from "react-native";
import { primaryColor } from "../Colors";
const transactionStyles = StyleSheet.create({
    transactionWrapper : {
      display : 'flex',
      flexDirection : 'row',
    },
    card : {
      flexGrow : 1,
      maxWidth : 'auto',
      borderRadius : 12,
      borderWidth : 3,
      marginBottom : 12,
      borderColor : 'white',
    },
    cardLayout : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
    },
    currentBalanceLabel : {
      color : primaryColor,
      fontSize : 40,
    },
    leftColumn : {
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'space-around',
    },
    transactionLabel : {fontSize : 28},
    closingLabel : {fontSize : 24},
    bottomMargin : {marginBottom : '5%'},
    
    deleteIcon : {
      width : 40,
      height : 40,
      alignSelf : 'center',
      justifyContent : 'center',
    },

    dropdownBox : {
      backgroundColor : primaryColor,
      borderColor : 'white',
      borderRadius : 4,
      borderWidth : 2,
    },

    dropdownBtn : {
      display : 'flex',
      flexDirection : 'row',
    },
    dropdownItems : {
      backgroundColor : primaryColor,
    },
    dropdownText : {
      textAlign : 'center',
      fontSize : 22,
      color : 'white',
    }
});

export default transactionStyles;