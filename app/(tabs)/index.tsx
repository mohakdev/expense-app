import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import mainStyles from '../styles/MainStyles';
import { useCurrencyContext } from '../CurrencyProvider';
import { transactionType } from '../Logic/types';
import TransactionCard from '../components/TransactionCard';
import Button from '../components/Button';
import TransactionModal from '../components/Modals/TransactionModal';

const index = () => {
    useFonts({
        'Jua-Regular': require('../assets/Jua-Regular.ttf'),
    });

    const [currentBalance,setCurrentBalance] = useState(0);
    const [transactions,setTransactions] = useState<transactionType[]>([]);
    const [showTransactionModal,setTransactionModal] = useState(false);
    const currencySymbol : string = useCurrencyContext().symbol;

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
                <Text style={mainStyles.balanceAmtLabel}>{currencySymbol}{currentBalance}</Text>
                {transactions.reverse()?.map((transaction) => {
                    return <TransactionCard key={transaction.transactionID} transaction={transaction}
                    currencySymbol={currencySymbol}/>
                })}
            </View>
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