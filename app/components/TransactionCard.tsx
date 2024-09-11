import { View, Text, StyleSheet } from 'react-native'
import React, { SetStateAction, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { transactionType } from '../types';
import { greenColor, redColor } from '../Colors';
import mainStyles from '../styles/MainStyles';
import transactionStyles from '../styles/TransactionStyles';
import DeleteTransaction from './DeleteTransaction';

interface ITransactionCard {
  transaction : transactionType,
  currencySymbol : string,
  deleteTransaction : (transactionToDelete: transactionType) => void,
}

const TransactionCard = (props : ITransactionCard) => {
  const [deleteToggle,setDeleteToggle] = useState(false);

  const cardColor = props.transaction.amount >= 0 ? greenColor : redColor;
  const colorStyle = StyleSheet.create({color : {backgroundColor : cardColor,},});
  const amount = Math.abs(props.transaction.amount);
  return (
    <View style={transactionStyles.transactionWrapper}>
      <DeleteTransaction deleteToggle={deleteToggle} setDeleteToggle={setDeleteToggle}
      transaction={props.transaction} deleteTransaction={props.deleteTransaction}/>
      <View style={[transactionStyles.card,colorStyle.color]}>
        <TouchableOpacity style={transactionStyles.cardLayout} onLongPress={() => setDeleteToggle(true)}>
          <View style={transactionStyles.leftColumn}>
            <Text style={[mainStyles.text,transactionStyles.transactionLabel]}>{props.transaction.transactionName}</Text>
            <Text style={[mainStyles.text,transactionStyles.closingLabel]}>Closing: {props.currencySymbol}{props.transaction.closingBalance}</Text>
          </View>
          <Text style={[mainStyles.title,{marginRight : 3}]}>{props.currencySymbol}{amount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TransactionCard;