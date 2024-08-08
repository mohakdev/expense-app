import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import mainStyles from '../styles/MainStyles';
import { useCurrencyContext } from '../CurrencyProvider';
import { currencyType, transactionType } from '../types';
import TransactionCard from '../components/TransactionCard';
import Button from '../components/Button';
import TransactionModal from '../components/Modals/TransactionModal';
import { LoadTransactions } from '../StoreData';

const index = () => {
    useFonts({
        'Jua-Regular': require('../assets/Jua-Regular.ttf'),
    });

    const [currentBalance,setCurrentBalance] = useState(0);
    const [transactions,setTransactions] = useState<transactionType[]>([]);
    const [showTransactionModal,setTransactionModal] = useState(false);
    const [currency,setCurrency] = useCurrencyContext();

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
        transactions.forEach(transaction => {
            balance += transaction.amount;
        });
        setCurrentBalance(balance);
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
                    currencySymbol={currency.symbol}/>
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