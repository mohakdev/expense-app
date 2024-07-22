import { StyleSheet } from "react-native";
import { primaryColor } from "../Colors";
const transactionStyles = StyleSheet.create({
    card : {
      minHeight : 80,
      borderRadius : 12,
      borderWidth : 3,
      borderColor : 'white',
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
});

export default transactionStyles;