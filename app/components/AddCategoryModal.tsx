import { View, Text, Modal, TextInput } from 'react-native'
import React,{useState} from 'react'
import settingStyles from '../styles/settingsStyles';
import mainStyles from '../styles/mainStyles';
import Button from './button';

interface IAddCategoryModal {
    showCategoryModal : boolean,
    setCategoryModal: React.Dispatch<React.SetStateAction<boolean>>,
    addCategory: (id : string) => void,
}

const CategoryModal = (props : IAddCategoryModal) => {
    
    const [categoryText,setCategoryText] = useState('category Text');
    return (
        <Modal visible={props.showCategoryModal} onRequestClose={() => props.setCategoryModal(false)} 
            animationType='slide' transparent = {true}>
            <View style={settingStyles.categoryModal}>
                <TextInput style = {[mainStyles.text,settingStyles.categoryTextBox]} onChangeText={setCategoryText} value={categoryText}></TextInput>
                <Button label='Submit' onClick={() => props.addCategory(categoryText)}/>
            </View>
        </Modal>
    )
}

export default CategoryModal;