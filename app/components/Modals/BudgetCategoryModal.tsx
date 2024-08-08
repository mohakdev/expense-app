import { View, Text, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import mainStyles from '../../styles/MainStyles'
import { categoryType } from '../../types'
import Button from '../Button'
import Slider from '@react-native-community/slider'
import { SaveCategories } from '../../StoreData'

interface IBudgetCategory {
  category : categoryType,
  currencySymbol : string,
  allocatedBudget : number,
  allCategories : categoryType[],
  setAllCategories : React.Dispatch<React.SetStateAction<categoryType[]>>,
  showModal : boolean,
  setShowModal : React.Dispatch<React.SetStateAction<boolean>>,
} 

const BudgetCategoryModal = (props : IBudgetCategory) => {
  const [budgetValue,setBudgetValue] = useState(0);
  const [maxBudget,setMaxBudget] = useState(0);
  const categoryName = props.category === undefined ? "" : props.category.name;

  const calculateMaxBudget = () => {
    if(props.allCategories.length < 0){return;}
    let amount = props.allocatedBudget;
    props.allCategories.forEach(element => {
      if(element.name !== props.category.name) {
        amount -= element.budgetAllocated!;
      }
    });
    setMaxBudget(amount);
  };

  const setCategoryBudget = () => {
    const categoryArray : categoryType[] = props.allCategories;
    categoryArray[props.allCategories.indexOf(props.category)].budgetAllocated = budgetValue;
    props.setAllCategories(categoryArray);
    SaveCategories(props.allCategories);
    props.setShowModal(false);
  }
  return (
    <Modal visible={props.showModal} onShow={calculateMaxBudget} onRequestClose={() => props.setShowModal(false)}
    animationType='slide' transparent={true}>
      <View style={mainStyles.modal}>
        <Text style={mainStyles.text}>Set {categoryName} budget</Text>
        <Text style={mainStyles.title}>{props.currencySymbol}{budgetValue}</Text>
        <Slider style={{width : '90%'}} minimumValue={0} maximumValue={maxBudget} step={10} 
        onValueChange={(numb) => setBudgetValue(numb)} minimumTrackTintColor='#FEC601' maximumTrackTintColor='#2F252F'/>
        <Button label='Submit' onClick={setCategoryBudget}/>
      </View>
    </Modal>
  )
}

export default BudgetCategoryModal