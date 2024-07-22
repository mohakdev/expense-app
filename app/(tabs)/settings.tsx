import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import mainStyles from '../styles/MainStyles';
import settingStyles from '../styles/SettingsStyles';
import CategoryList from '../components/CategoryList';
import CategoryModal from '../components/Modals/AddCategoryModal';
import CurrencyModal from '../components/Modals/CurrencyModal';
import { categoryType } from '../Logic/types';
import { useCategoryContext } from '../CategoryProvider';

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
        <View style={[mainStyles.background,{justifyContent : 'space-between'}]}>
            <View style={settingStyles.wrapperView}>
                <Text style={mainStyles.title}>Settings</Text>
                <Text style={mainStyles.text} >Categories</Text>
                <CategoryList allCategories={allCategories} deleteCategory={deleteCategory}/>
                <Button label='ADD CATEGORY' onClick={() => setCategoryModal(true)}/>
            </View>
            <CategoryModal 
                showCategoryModal={showCategoryModal} setCategoryModal={setCategoryModal} addCategory={addCategory}/>
            <CurrencyModal showCurrencyModal={showCurrencyModal} setCurrencyModal={setCurrencyModal}/>
            <View style={{marginBottom: 20}}>
                <Button label='CHANGE CURRENCY' onClick={() => setCurrencyModal(true)}/>
            </View>
        </View>
    )
}

export default settings;