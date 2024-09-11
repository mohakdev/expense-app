import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import mainStyles from '../styles/MainStyles';
import { useCurrencyContext } from '../CurrencyProvider';
import { categoryType, transactionType } from '../types';
import TransactionCard from '../components/TransactionCard';
import Button from '../components/Button';
import TransactionModal from '../components/Modals/TransactionModal';
import { LoadTransactions, SaveCategories, SaveTransactions} from '../StoreData';
import CreateToast from '../components/Modals/Toast';
import { useCategoryContext } from '../CategoryProvider';

const index = () => {
    const [currentBalance,setCurrentBalance] = useState(0);
    const [transactions,setTransactions] = useState<transactionType[]>([]);
    const [currency,setCurrency] = useCurrencyContext();
    const [showTransactionModal,setTransactionModal] = useState(false);
    const [categories,setCategories] = useCategoryContext();

    useEffect(() => {
        const fetchTransactions = async () => {
            const loadedArray = await LoadTransactions();
            setTransactions(loadedArray);
        };

        fetchTransactions();
    }, []);

    useEffect(() => {
        updateBalance();
    }, [transactions]);

    const updateBalance = () => {
        let balance = 0;
        for (let j = transactions.length - 1; j >= 0; j--) {
            transactions[j].closingBalance = transactions[j].amount + balance;
            balance += transactions[j].amount;
        }
        setCurrentBalance(balance);
    }
    const deleteTransaction = (transactionToDel : transactionType) => {
        const newTransactions = transactions;
        newTransactions.splice(transactions.indexOf(transactionToDel),1);
        setTransactions(newTransactions);
        SaveTransactions(newTransactions);
        if(transactionToDel.amount < 0) //Is an expense
        {
            const categoryArray : categoryType[] = categories;
            categoryArray[categories.indexOf(transactionToDel.category!)].budgetUsed! -= Math.abs(transactionToDel.amount);
            setCategories(categoryArray);
            SaveCategories(categoryArray);
        }
        updateBalance();
        CreateToast('Transaction Deleted!');
    }

    return (
        <View style={[mainStyles.background,{justifyContent : 'space-between'}]}>
            <View style={{width : '95%'}}>
                <Text style={mainStyles.text}>Current Balance</Text>
                <Text style={mainStyles.balanceAmtLabel}>{currency.symbol}{currentBalance}</Text>
            </View>
            <ScrollView style={{width : '95%'}}>
                {transactions?.map((transaction) => {
                    return <TransactionCard key={transaction.transactionID} transaction={transaction}
                    currencySymbol={currency.symbol} deleteTransaction={deleteTransaction}/>
                })}
            </ScrollView>
            <View style={{marginBottom: 20}}>
                <Button label='New Transaction' onClick={() => setTransactionModal(true)}/>
            </View>
            <TransactionModal currentBalance={currentBalance}
            transactions={transactions}
            setTransactions={setTransactions} 
            updateBalance={updateBalance}
            showModal={showTransactionModal} 
            setShowModal={setTransactionModal}/>
        </View>
    )
}
export default index;