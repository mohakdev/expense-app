import { View, Text } from 'react-native'
import React from 'react'
import { categoryType } from '../Logic/types'
import ProgressBar from './ProgressBar'
import mainStyles from '../styles/mainStyles'
import { budgetStyles } from '../styles/budgetStyles'

interface IBudgetCategory {
  category : categoryType,
  currency : string,
}

const BudgetCategory = (props : IBudgetCategory) => {

  return (
    <View style={budgetStyles.budgetCategoryCard}>
        <Text style={mainStyles.text}>{props.category.name}</Text>
        <ProgressBar moneyUsed={props.category.budgetUsed!} 
        totalBudget={props.category.budgetAllocated!}
        currency={props.currency}/>
    </View>
  )
}

export default BudgetCategory;