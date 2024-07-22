import { View, Text, Modal, TextInput } from 'react-native'
import React,{useState} from 'react'
import settingStyles from '../../styles/SettingsStyles';
import mainStyles from '../../styles/MainStyles';
import Button from '../Button';

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
            <View style={mainStyles.modal}>
                <TextInput style = {mainStyles.textBox} onChangeText={setCategoryText} value={categoryText}></TextInput>
                <Button label='Submit' onClick={() => props.addCategory(categoryText)}/>
            </View>
        </Modal>
    )
}

export default CategoryModal;