import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import mainStyles from '../../styles/MainStyles'
import Button from '../Button';
import { categoryType, transactionType } from '../../Logic/types';
import CategoryDropdown from '../CategoryDropdown';
import transactionStyles from '../../styles/TransactionStyles';
import CreateToast from './Toast';
import { greenColor, primaryColor, redColor } from '../../Colors';

interface ITransactionModal {
    transactions : transactionType[],
    setTransactions : React.Dispatch<React.SetStateAction<transactionType[]>>,
    showModal : boolean,
    setShowModal : React.Dispatch<React.SetStateAction<boolean>>,
}

const TransactionModal = (props : ITransactionModal) => {
  const [transactionTitle,setTransactionTitle] = useState('Transaction Title');
  const [transactionAmt,setTransactionAmt] = useState('Amount');
  const [selectedCategory,setSelectedCategory] = useState<categoryType>();
  const [isExpense,setIsExpense] = useState(true);

  const buttonStyle = StyleSheet.create({
    incomeOrExpenseView : {
      display : 'flex',
      borderRadius : 12,
      flexDirection : 'row',
      backgroundColor : primaryColor,
      marginBottom : 12,
    },
    expenseStyle : {
      paddingLeft : 4,
      borderTopLeftRadius : 12,
      borderBottomLeftRadius : 12, 
      backgroundColor : isExpense ? redColor : primaryColor
    },
    incomeStyle: {
      paddingRight : 4,
      borderTopRightRadius : 12,
      borderBottomRightRadius : 12,
      backgroundColor : isExpense ? primaryColor : greenColor
    }
  })


  const createTransaction = () => {
    if(handleInputError()){
      return;
    }
    const transaction : transactionType = {
      transactionName : transactionTitle,
      amount : isExpense ? -Number(transactionAmt) : Number(transactionAmt),
      category : selectedCategory!,
      closingBalance : 100,
      transactionID : props.transactions.length + 1,
    }
    const newTransactions = props.transactions;
    newTransactions.push(transaction);

    console.log(transaction.amount, Math.abs(transaction.amount));

    props.setTransactions(newTransactions);
    props.setShowModal(false);
  }

  const handleInputError = () : boolean => {
    if(Number.isNaN(+transactionAmt) || Number(transactionAmt) < 0)
    {
      CreateToast('Amount should be a positive number'); 
      return true;
    }
    return false;
  }

  const handleExpenseBtn = () => {
    setIsExpense(true);
  };
  const handleIncomeBtn = () => {
    setIsExpense(false);
  };

  return (
    <Modal visible={props.showModal} onRequestClose={() => props.setShowModal(false)}
    animationType='slide' transparent={true}>
        <View style={mainStyles.modal}>
          <View style={buttonStyle.incomeOrExpenseView}>
            <TouchableOpacity style={buttonStyle.expenseStyle} onPress={handleExpenseBtn}>
              <Text style={mainStyles.text}>Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyle.incomeStyle} onPress={handleIncomeBtn}>
              <Text style={mainStyles.text}>Income</Text>
            </TouchableOpacity>
          </View>
          <TextInput style = {[mainStyles.textBox,transactionStyles.bottomMargin]} onChangeText={setTransactionTitle} value={transactionTitle}/>
          <TextInput style = {[mainStyles.textBox,transactionStyles.bottomMargin]} onChangeText={setTransactionAmt} value={transactionAmt}/>
          <CategoryDropdown setSelectedCategory={setSelectedCategory}/>
          <Button onClick={createTransaction} label='Submit'/>
        </View>
    </Modal>
  )
}

export default TransactionModal;