import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCurrencyContext } from '../CurrencyProvider'
import { categoryType, currencyType } from '../Logic/types';
import { useCategoryContext } from '../CategoryProvider';
import BudgetCategory from '../components/BudgetCategory';
import mainStyles from '../styles/mainStyles';
import Button from '../components/button';
import BudgetModal from '../components/Modals/BudgetModal';
import BudgetCategoryModal from '../components/Modals/BudgetCategoryModal';

const budget = () => {
    const currency : currencyType = useCurrencyContext();
    const [categories,setCategories] = useCategoryContext();
    const [allocatedBudget,setAllocatedBudget] = useState(0);
    const [remainingBudget,setRemainingBudget] = useState(0);
    const [selectedCategory,setSelectedCategory] = useState<categoryType>(categories[0]);
    const [showbudgetModal,setBudgetModal] = useState(false);
    const [showBudgetCategoryModal,setBudgetCategoryModal] = useState(false);
    
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
                currency={currency.symbol}
                setSelectedCategory={setSelectedCategory}
                setBudgetCategoryModal={setBudgetCategoryModal}/>
            })}
            <Button label='Reallocate' onClick={() => setBudgetModal(true)}/>
            <BudgetModal setAllocatedBudget={setAllocatedBudget} setBudgetModal={setBudgetModal} showBudgetModal={showbudgetModal}/>
            <BudgetCategoryModal category={selectedCategory!} totalBudget={allocatedBudget} 
            currencySymbol={currency.symbol} showModal={showBudgetCategoryModal} 
            setShowModal={setBudgetCategoryModal}/>
        </View>
    )
}

export default budget;