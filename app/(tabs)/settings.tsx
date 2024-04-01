import { StyleSheet, View, Text, Pressable, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';
import Category from "../components/category";
import { LoadCategories , SaveCategories } from '../Logic/SaveData';
import Button from '../components/button';

const settings = () => {
    const [allCategories,setAllCategories] = useState(LoadCategories());
    const [categoryText,setCategoryText] = useState('');
    const [showCategoryWindow, setCategoryWindow] = useState(false);
    const [showCurrencies, setShowCurrencies] = useState(false);


    function AddCategory(name : string)
    {
        allCategories.push({name : name});
        const newCategories = allCategories;
        console.log(newCategories);
        setAllCategories(newCategories);
        SaveCategories(newCategories);
        setCategoryWindow(false);
    }
  
    function DeleteCategory(id : string)
    {
        const newCategories = allCategories.filter(function (category) {
            return category.name !== id;
        });
        setAllCategories(newCategories); //This refreshes the UI with updated list.
        SaveCategories(newCategories); //Saving changes the file
    }

    function ChangeCurrency()
    {

    }
  
    return (
        <View style={[styles.background,{justifyContent : 'space-between'}]}>
            <View style={settingStyles.wrapperView}>
                <Text style={styles.title}>Settings</Text>
                <Text style={[styles.text, settingStyles.categoryTxt]} >Categories</Text>
                {
                    allCategories.map(function (category)
                    {
                        return <Category key={category.name} name={category.name} 
                        onClick={() => DeleteCategory(category.name)}/>
                    })
                }
                <Button label='ADD CATEGORY' onClick={() => setCategoryWindow(true)}/>
            </View>
            {/* Add Category Modal */}
            <Modal visible={showCategoryWindow} onRequestClose={() => setCategoryWindow(false)}>
                <View>
                    <TextInput onChangeText={setCategoryText} value={categoryText}></TextInput>
                    <Button label='Submit' onClick={() => AddCategory(categoryText)}/>
                </View>
            </Modal>
            {/* Currency Modal
            <Modal visible={showCurrencies}>

            </Modal> */}
            <View style={{marginBottom: 20}}>
                <Button label='CHANGE CURRENCY' onClick={() => setShowCurrencies(true)}/>
            </View>
        </View>
    )
}

const settingStyles = StyleSheet.create({
    wrapperView : {
        flex : 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    categoryTxt: {
        marginLeft: 10,
        alignSelf: 'flex-start',
        fontSize: 26,
        color: 'white'
    }
})

export default settings;