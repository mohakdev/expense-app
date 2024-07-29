import { View, Text, Modal, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import mainStyles from '../../styles/MainStyles'
import Button from '../Button';
import { categoryType, transactionType } from '../../Logic/types';
import CategoryDropdown from '../CategoryDropdown';
import transactionStyles from '../../styles/TransactionStyles';


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

  const createTransaction = () => {
    const transaction : transactionType = {
      transactionName : transactionTitle,
      amount : +transactionAmt,
      category : selectedCategory!,
      closingBalance : 100,
      transactionID : props.transactions.length,
    }
    const newTransactions = props.transactions;
    newTransactions.push(transaction);
    props.setTransactions(newTransactions);
    props.setShowModal(false);
  }

  return (
    <Modal visible={props.showModal} onRequestClose={() => props.setShowModal(false)}
    animationType='slide' transparent={true}>
        <View style={mainStyles.modal}>
          <TextInput style = {[mainStyles.textBox,transactionStyles.bottomMargin]} onChangeText={setTransactionTitle} value={transactionTitle}/>
          <TextInput style = {[mainStyles.textBox,transactionStyles.bottomMargin]} onChangeText={setTransactionAmt} value={transactionAmt}/>
          <CategoryDropdown/>
          <Button onClick={createTransaction} label='Submit'/>
        </View>
    </Modal>
  )
}

export default TransactionModal;