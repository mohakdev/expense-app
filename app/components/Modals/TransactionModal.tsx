import { View, Modal, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import mainStyles from '../../styles/MainStyles'
import Button from '../Button';
import { categoryType, transactionType } from '../../types';
import CategoryDropdown from '../CategoryDropdown';
import transactionStyles from '../../styles/TransactionStyles';
import CreateToast from './Toast';
import { useCategoryContext } from '../../CategoryProvider';
import IncomeOrExpense from './IncomeOrExpense';
import { SaveCategories, SaveTransactions } from '../../StoreData';

interface ITransactionModal {
    currentBalance : number,
    transactions : transactionType[],
    setTransactions : React.Dispatch<React.SetStateAction<transactionType[]>>,
    updateBalance : () => void,
    showModal : boolean,
    setShowModal : React.Dispatch<React.SetStateAction<boolean>>,
}

const TransactionModal = (props : ITransactionModal) => {
  const [categories,setCategories] = useCategoryContext();
  const [transactionTitle,setTransactionTitle] = useState('Transaction Title');
  const [transactionAmt,setTransactionAmt] = useState('Amount');
  const [selectedCategory,setSelectedCategory] = useState<categoryType>();
  const [isExpense,setIsExpense] = useState(true);

  const createTransaction = () => {
    if(handleInputError()){return;}

    const amount = isExpense ? -Number(transactionAmt) : Number(transactionAmt);
    const closingBalance = props.currentBalance + amount;
    const transaction : transactionType = {
      transactionName : transactionTitle,
      amount : amount,
      category : selectedCategory!,
      closingBalance : closingBalance,
      transactionID : props.transactions.length + 1,
    }
    updateCategoryBudget();

    const newTransactions = props.transactions;
    newTransactions.unshift(transaction); //Adds a new transaction in the beginning of the array
    props.setTransactions(newTransactions);
    SaveTransactions(newTransactions);
    props.updateBalance();
    props.setShowModal(false);
  }

  const updateCategoryBudget = () => {
    if(isExpense)
    {
      const categoryArray : categoryType[] = categories;
      categoryArray[categories.indexOf(selectedCategory!)].budgetUsed! += Math.abs(Number(transactionAmt));
      setCategories(categoryArray);
      SaveCategories(categoryArray);
    }
  }

  const handleInputError = () : boolean => {
    if(Number.isNaN(+transactionAmt) || Number(transactionAmt) < 0)
    {
      CreateToast('Amount should be a positive number'); 
      return true;
    }
    return false;
  }

  return (
    <Modal visible={props.showModal} onRequestClose={() => props.setShowModal(false)}
    animationType='slide' transparent={true}>
        <View style={mainStyles.modal}>
          <IncomeOrExpense isExpense={isExpense} setIsExpense={setIsExpense}/>
          <TextInput style = {[mainStyles.textBox,transactionStyles.bottomMargin]} onChangeText={setTransactionTitle} value={transactionTitle}/>
          <TextInput style = {[mainStyles.textBox,transactionStyles.bottomMargin]} onChangeText={setTransactionAmt} value={transactionAmt}/>
          <CategoryDropdown categories={categories} setSelectedCategory={setSelectedCategory}/>
          <Button onClick={createTransaction} label='Submit'/>
        </View>
    </Modal>
  )
}

export default TransactionModal;