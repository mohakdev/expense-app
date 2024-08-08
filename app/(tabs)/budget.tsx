import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCurrencyContext } from '../CurrencyProvider'
import { categoryType, currencyType } from '../types';
import { useCategoryContext } from '../CategoryProvider';
import BudgetCategory from '../components/BudgetCategory';
import mainStyles from '../styles/MainStyles';
import BudgetModal from '../components/Modals/BudgetModal';
import BudgetCategoryModal from '../components/Modals/BudgetCategoryModal';
import { budgetStyles } from '../styles/BudgetStyles';
import HeaderView from '../components/HeaderView';
import { LoadBudget } from '../StoreData';

const budget = () => {
    const [categories,setCategories] = useCategoryContext();
    const [allocatedBudget,setAllocatedBudget] = useState(0);
    const [selectedCategory,setSelectedCategory] = useState<categoryType>(categories[0]);
    const [showbudgetModal,setBudgetModal] = useState(false);
    const [showBudgetCategoryModal,setBudgetCategoryModal] = useState(false);
    const [currency,setCurrency] = useCurrencyContext();
    
    useEffect(() => {
        const fetchBudget = async () => {
            const loadedBudget = await LoadBudget();
            setAllocatedBudget(loadedBudget);
        };
        fetchBudget();
    }, []);
    return (
        <View style={mainStyles.background}>
            <HeaderView title='Budget' image={require('../assets/wallet.png')} onClick={() => setBudgetModal(true)}/> 
            <Text style={mainStyles.text}>Budget Allocated: {currency.symbol}{allocatedBudget}</Text>
            <ScrollView style={budgetStyles.scrollView}>
                {categories.length > 0 &&
                categories?.map(function (category)
                {
                    return <BudgetCategory key={category.name} 
                    category={category}
                    setSelectedCategory={setSelectedCategory}
                    setBudgetCategoryModal={setBudgetCategoryModal}/>
                })}
            </ScrollView>
            <BudgetModal setAllocatedBudget={setAllocatedBudget} 
            setBudgetModal={setBudgetModal} showBudgetModal={showbudgetModal}/>
            <BudgetCategoryModal allocatedBudget={allocatedBudget} allCategories={categories} setAllCategories={setCategories} 
            category={selectedCategory!} currencySymbol={currency.symbol} 
            showModal={showBudgetCategoryModal} setShowModal={setBudgetCategoryModal}/>
        </View>
    )
}

export default budget;