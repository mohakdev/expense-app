import { View, Text, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import mainStyles from '../../styles/MainStyles';
import settingStyles from '../../styles/SettingsStyles';
import Button from '../Button';
import { SaveBudget } from '../../StoreData';
import CreateToast from './Toast';

interface IBudgetModal {
    showBudgetModal : boolean,
    setBudgetModal: React.Dispatch<React.SetStateAction<boolean>>,
    setAllocatedBudget : React.Dispatch<React.SetStateAction<number>>,
}

const BudgetModal = (props : IBudgetModal) => {
    const [allocatedText,setAllocatedText] = useState('');
    const onSubmitClicked = () => {
        if(Number.isNaN(+allocatedText)){
            CreateToast("Amount must be a positive number");
            return;
        }
        props.setAllocatedBudget(+allocatedText);
        SaveBudget(+allocatedText);
        props.setBudgetModal(false);
    }
    return (
    <Modal visible={props.showBudgetModal} onRequestClose={() => props.setBudgetModal(false)}
    animationType='slide' transparent={true}>
        <View style={mainStyles.modal}>
            <Text style={mainStyles.text}>Total Budget</Text>
            <TextInput style = {mainStyles.textBox} onChangeText={setAllocatedText} value={allocatedText}></TextInput>
            <Button label='Submit' onClick={onSubmitClicked}/>
        </View>
    </Modal>
    )
}

export default BudgetModal;