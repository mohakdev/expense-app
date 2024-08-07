import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { transactionType } from '../types';
import { greenColor, redColor } from '../Colors';
import mainStyles from '../styles/MainStyles';
import transactionStyles from '../styles/TransactionStyles';

interface ITransactionCard {
  transaction : transactionType,
  currencySymbol : string, 
}
const TransactionCard = (props : ITransactionCard) => {
  const cardColor = props.transaction.amount >= 0 ? greenColor : redColor;
  const colorStyle = StyleSheet.create({color : {backgroundColor : cardColor,},});
  const amount = Math.abs(props.transaction.amount);
  return (
    <View style={[transactionStyles.card,colorStyle.color]}>
      <View style={transactionStyles.leftColumn}>
        <Text style={[mainStyles.text,transactionStyles.transactionLabel]}>{props.transaction.transactionName}</Text>
        <Text style={[mainStyles.text,transactionStyles.closingLabel]}>Closing: {props.currencySymbol}{props.transaction.closingBalance}</Text>
      </View>
      <Text style={[mainStyles.title,{marginRight : 3}]}>{props.currencySymbol}{amount}</Text>
    </View>
  )
}

export default TransactionCard;