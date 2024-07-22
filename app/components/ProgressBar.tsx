import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { budgetStyles } from '../styles/BudgetStyles';
import mainStyles from '../styles/MainStyles';
import { greenColor, redColor } from '../Colors';

interface IProgressBar {
    totalBudget : number,
    moneyUsed : number,
    currency : string,
}

const ProgressBar = (props : IProgressBar) => {
    const progress : number = (props.moneyUsed / props.totalBudget) * 100;
    const clampedProgress : number = progress > 100 ? 100 : progress;
    const bgColor : string = progress >= 100 ? redColor : greenColor;
    
    const progressStyle = StyleSheet.create({
      progressBarParent : {
        height : '30%',
        width: '100%',
        backgroundColor: '#2F252F',
        borderRadius: 30,
      },
      progressBarChild : {
        height: '100%',
        width: `${clampedProgress}%`,
        backgroundColor: bgColor,
        borderRadius:30,
      },
  });
       
    return (
    <View style={progressStyle.progressBarParent}>
      <View style={progressStyle.progressBarChild}/>
      <Text style={[mainStyles.justFont,budgetStyles.budgetUsedText]}>{props.currency + props.moneyUsed.toString()}</Text>
      <Text style={[mainStyles.justFont,budgetStyles.budgetAllocatedText]}>{props.currency +props.totalBudget.toString()}</Text>
    </View>
    )
}

export default ProgressBar;