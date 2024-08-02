import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import mainStyles from '../../styles/MainStyles'
import { greenColor, primaryColor, redColor } from '../../Colors'

interface IIncomeOrExpense {
    isExpense : boolean,
    setIsExpense : React.Dispatch<React.SetStateAction<boolean>>,
}

const IncomeOrExpense = (props : IIncomeOrExpense) => {
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
            backgroundColor : props.isExpense ? redColor : primaryColor
        },
        incomeStyle: {
            paddingRight : 4,
            borderTopRightRadius : 12,
            borderBottomRightRadius : 12,
            backgroundColor : props.isExpense ? primaryColor : greenColor
        }
    })

    
    const handleExpenseBtn = () => {props.setIsExpense(true);};
    const handleIncomeBtn = () => {props.setIsExpense(false);};

    return (
        <View style={buttonStyle.incomeOrExpenseView}>
        <TouchableOpacity style={buttonStyle.expenseStyle} onPress={handleExpenseBtn}>
        <Text style={mainStyles.text}>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle.incomeStyle} onPress={handleIncomeBtn}>
        <Text style={mainStyles.text}>Income</Text>
        </TouchableOpacity>
    </View>
    )
}

export default IncomeOrExpense;