import { StyleSheet, View, Text, TouchableOpacity , Modal, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';
import Category from "../components/category";
import { LoadCategories , SaveCategories, currencyType } from '../Logic/SaveData';
import Button from '../components/button';
import { secondaryColor } from '../colors';
import mainStyles from '../styles';
import { currencies } from '../Logic/currencyData'

const settings = () => {
    const [allCategories,setAllCategories] = useState(LoadCategories());
    const [categoryText,setCategoryText] = useState('category Text');
    const [showCategoryModal, setCategoryModal] = useState(false);
    const [showCurrencyModal, setCurrencyModal] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    function AddCategory(name : string)
    {
        allCategories.push({name : name});
        const newCategories = allCategories;
        console.log(newCategories);
        setAllCategories(newCategories);
        SaveCategories(newCategories);
        setCategoryModal(false);
    }
  
    function DeleteCategory(id : string)
    {
        const newCategories = allCategories.filter(function (category) {
            return category.name !== id;
        });
        setAllCategories(newCategories); //This refreshes the UI with updated list.
        SaveCategories(newCategories); //Saving changes the file
    }

    function ChangeCurrency(item : currencyType)
    {
        setCurrencyModal(false);
        setSelectedCurrency(item);
        console.log(item);
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
                <Button label='ADD CATEGORY' onClick={() => setCategoryModal(true)}/>
            </View>
            {/* Add Category Modal */}
            <Modal visible={showCategoryModal} onRequestClose={() => setCategoryModal(false)} 
                animationType='slide' transparent = {true}>
                <View style={settingStyles.categoryModal}>
                    <TextInput style = {[mainStyles.text,settingStyles.categoryTextBox]} onChangeText={setCategoryText} value={categoryText}></TextInput>
                    <Button label='Submit' onClick={() => AddCategory(categoryText)}/>
                </View>
            </Modal>
            {/* Currency Modal */}
            <Modal visible={showCurrencyModal} onRequestClose={() => setCurrencyModal(false)} 
                animationType='fade' transparent={true}>
                <View style = {settingStyles.currencyModal}>
                    <Text style = {[mainStyles.text,settingStyles.currencyHeader]}>Choose Currency</Text>
                    <FlatList data = {currencies} keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style = {settingStyles.cuurencyBtn} onPress={() => ChangeCurrency(item)}>
                        <Text style = {[mainStyles.text,settingStyles.currencyText]}>{item.symbol} - {item.name}</Text>
                      </TouchableOpacity>                        
                    )}/>
                </View>
            </Modal>
            {/* Change Currency Button */}
            <View style={{marginBottom: 20}}>
                <Button label='CHANGE CURRENCY' onClick={() => setCurrencyModal(true)}/>
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
    },
    categoryModal : {
        alignSelf : 'center',
        backgroundColor : secondaryColor,
        position : 'absolute',
        marginTop : '60%',
        width : '90%',
        borderWidth : 3,
        borderColor : 'white',
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center'
    },
    categoryTextBox : {
        color : 'white',
        fontSize : 26,
        borderRadius : 4,
        borderColor : 'white',
        borderWidth : 3,
        padding : 6,
        textAlign : 'center'
    },
    currencyModal : {
        alignSelf : 'center',
        backgroundColor : secondaryColor,
        position : 'absolute',
        marginTop : '50%',
        width : '80%',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 12,
        borderWidth: 3,
        borderColor : 'white',
    },
    currencyHeader : {
        fontSize : 34 ,
        color : 'white',
    },
    cuurencyBtn : {
        marginTop : 10,
    },
    currencyText : {
        fontSize : 28 ,
        color : 'white',
    }
})

export default settings;