import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { categoryType } from '../types'
import ProgressBar from './ProgressBar'
import mainStyles from '../styles/MainStyles'
import { budgetStyles } from '../styles/BudgetStyles'

interface IBudgetCategory {
  category : categoryType
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
        totalBudget={props.category.budgetAllocated!}/>
    </Pressable>
  )
}

export default BudgetCategory;