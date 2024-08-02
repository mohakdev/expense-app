import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import mainStyles from '../styles/MainStyles';
import settingStyles from '../styles/SettingsStyles';
import CategoryList from '../components/CategoryList';
import CategoryModal from '../components/Modals/AddCategoryModal';
import CurrencyModal from '../components/Modals/CurrencyModal';
import { categoryType } from '../Logic/types';
import { useCategoryContext } from '../CategoryProvider';
import HeaderView from '../components/HeaderView';

const settings = () => {
    const [showCategoryModal, setCategoryModal] = useState(false);
    const [showCurrencyModal, setCurrencyModal] = useState(false);
    const [allCategories,setAllCategories] = useCategoryContext();

    function addCategory(categoryName : string){
        const category : categoryType = {name: categoryName, budgetAllocated : 0, budgetUsed : 0};
        const newCategoryArray : categoryType[] | undefined = allCategories;
        newCategoryArray?.push(category);
        setAllCategories(newCategoryArray);
        setCategoryModal(false);
    }
    function deleteCategory(categoryName : string)
    {
        let newCategoryArray = allCategories?.filter(item => item.name !== categoryName);
        setAllCategories(newCategoryArray);
    }

    return (
        <View style={mainStyles.background}>
            <HeaderView title='Settings' image={require('../assets/dollar.png')} onClick={() => setCurrencyModal(true)}/> 
            <ScrollView>
                <Text style={mainStyles.text} >Categories</Text>
                <CategoryList allCategories={allCategories} deleteCategory={deleteCategory}/>
            </ScrollView>
            <View style={{marginBottom : 20}}>
                <Button label='ADD CATEGORY' onClick={() => setCategoryModal(true)}/>
            </View>
            <CategoryModal showCategoryModal={showCategoryModal} setCategoryModal={setCategoryModal} addCategory={addCategory}/>
            <CurrencyModal showCurrencyModal={showCurrencyModal} setCurrencyModal={setCurrencyModal}/>
        </View>
    )
}

export default settings;