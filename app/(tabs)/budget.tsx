import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCurrencyContext } from '../CurrencyProvider'
import { currencyType } from '../Logic/types';
import { useCategoryContext } from '../CategoryProvider';
import BudgetCategory from '../components/CategoryBudget';
import mainStyles from '../styles/mainStyles';
import Button from '../components/button';
import BudgetModal from '../components/BudgetModal';

const budget = () => {
    const currency : currencyType = useCurrencyContext();
    const [categories,setCategories] = useCategoryContext();
    const [allocatedBudget,setAllocatedBudget] = useState(0);
    const [remainingBudget,setRemainingBudget] = useState(0);
    const [showbudgetModal,setBudgetModal] = useState(false);
    
    useEffect(() => {
        calculateRemainingBudget();
    },[allocatedBudget]);

    const calculateRemainingBudget = () => {
        let remainingBudget = allocatedBudget;
        categories.forEach(category => {
            remainingBudget -= category.budgetUsed!;
        });
        if(remainingBudget < 0) {remainingBudget = 0;}
        setRemainingBudget(remainingBudget);
    }

    return (
        <View style={mainStyles.background}>
            <Text style={mainStyles.title}>Budget</Text>
            <Text style={mainStyles.text}>Budget Allocated: {currency.symbol}{allocatedBudget}</Text>
            <Text style={mainStyles.text}>Remaining: {currency.symbol}{remainingBudget}</Text>
            {categories?.map(function (category) 
            {
                return <BudgetCategory key={category.name} 
                category={category}
                currency={currency.symbol}/>
            })}
            <Button label='Reallocate' onClick={() => setBudgetModal(true)}/>
            <BudgetModal setAllocatedBudget={setAllocatedBudget} setBudgetModal={setBudgetModal} showBudgetModal={showbudgetModal}/>
        </View>
    )
}

export default budget;