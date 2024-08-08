import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { useCategoryContext } from '../CategoryProvider';
import transactionStyles from '../styles/TransactionStyles';
import mainStyles from '../styles/MainStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categoryType } from '../types';

interface ICategoryDropdown {
  categories : categoryType[],
  setSelectedCategory : React.Dispatch<React.SetStateAction<categoryType>>,
}

const CategoryDropdown = (props : ICategoryDropdown) => {
    const data = props.categories.map((category) => {
      return category.name;
    });
    return (
      <View style={transactionStyles.dropdownBox}>
        <SelectDropdown
          data={data} 
          onSelect={(selectedItem,index) => {
            props.setSelectedCategory(props.categories[index]);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={transactionStyles.dropdownBtn}>
                <Text style={mainStyles.text}>
                  {(selectedItem) || 'Select Category'}
                </Text>
                {isOpened ? (
                  <Icon name="arrow-drop-up" size={24} color="#ffffff" />
                ) : (
                  <Icon name="arrow-drop-down" size={24} color="#ffffff" />
                )}
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View style={transactionStyles.dropdownItems}>
                <Text style={[mainStyles.justFont,transactionStyles.dropdownText]}>{item}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
  )
}

export default CategoryDropdown;