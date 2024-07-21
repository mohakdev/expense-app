import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import mainStyles from '../../styles/mainStyles'
import { categoryType } from '../../Logic/types'
import Button from '../button'
import Slider from '@react-native-community/slider'

interface IBudgetCategory {
  category : categoryType,
  totalBudget : number,
  showModal : boolean,
  currencySymbol : string,
  setShowModal : React.Dispatch<React.SetStateAction<boolean>>,
} 

const BudgetCategoryModal = (props : IBudgetCategory) => {
  const [budgetValue,setBudgetValue] = useState(0);
  const setCategoryBudget = () => {
    props.category.budgetAllocated = budgetValue;
    props.setShowModal(false);
  }
  return (
    <Modal visible={props.showModal} onRequestClose={() => props.setShowModal(false)}
    animationType='slide' transparent={true}>
      <View style={mainStyles.modal}>
        <Text style={mainStyles.text}>Set {props.category.name} budget</Text>
        <Text style={mainStyles.title}>{props.currencySymbol}{budgetValue}</Text>
        <Slider style={{width : '90%'}} minimumValue={0} maximumValue={props.totalBudget} step={10} 
        onValueChange={(numb) => setBudgetValue(numb)} minimumTrackTintColor='#FEC601' maximumTrackTintColor='#2F252F'/>
        <Button label='Submit' onClick={setCategoryBudget}/>
      </View>
    </Modal>
  )
}

export default BudgetCategoryModal