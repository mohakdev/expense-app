import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { categoryType } from '../Logic/types'
import ProgressBar from './ProgressBar'
import mainStyles from '../styles/mainStyles'
import { budgetStyles } from '../styles/budgetStyles'

interface IBudgetCategory {
  category : categoryType,
  currency : string,
  setSelectedCategory : React.Dispatch<React.SetStateAction<categoryType>>,
  setBudgetCategoryModal : React.Dispatch<React.SetStateAction<boolean>>,
}

const BudgetCategory = (props : IBudgetCategory) => {
  const openBudgetCategoryModal = () => {
    props.setSelectedCategory(props.category);
    props.setBudgetCategoryModal(true);
  }
  return (
    <Pressable onPress={openBudgetCategoryModal} style={budgetStyles.budgetCategoryCard}>
        <Text style={mainStyles.text}>{props.category.name}</Text>
        <ProgressBar moneyUsed={props.category.budgetUsed!} 
        totalBudget={props.category.budgetAllocated!}
        currency={props.currency}/>
    </Pressable>
  )
}

export default BudgetCategory;