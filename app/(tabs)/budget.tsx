import { View, Text } from 'react-native'
import React from 'react'
import { useCurrencyContext } from '../CurrencyProvider'
import { currencyType } from '../Logic/types';
import { useCategoryContext } from '../CategoryProvider';
import BudgetCategory from '../components/CategoryBudget';
import mainStyles from '../styles/mainStyles';

const budget = () => {
    const currency : currencyType = useCurrencyContext();
    const [categories,setCategories] = useCategoryContext();
    return (
        <View style={mainStyles.background}>
            <Text style={mainStyles.title}>Budget</Text>
            <Text style={mainStyles.text}>Budget Allocated: {currency.symbol}2000</Text>
            <Text style={mainStyles.text}>Remaining: {currency.symbol}200</Text>

            {categories?.map(function (category) 
            {
                return <BudgetCategory key={category.name} 
                category={category}
                currency={currency.symbol}/>
            })}
        </View>
    )
}

export default budget;