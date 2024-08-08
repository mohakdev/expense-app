import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import settingStyles from '../../styles/SettingsStyles';
import mainStyles from '../../styles/MainStyles';
import { currencyType } from '../../types';
import { SaveCurrency } from '../../StoreData';
import { useCurrencyContext } from '../../CurrencyProvider';

interface ICurrencyModal {
    showCurrencyModal : boolean,
    setCurrencyModal : React.Dispatch<React.SetStateAction<boolean>>,
}
const currencies : currencyType[] = [
    {id:1,name:"USD",symbol:"$"},
    {id:2,name:"INR",symbol:"₹"},
    {id:3,name:"AUD",symbol:"A$"},
    {id:4,name:"CAD",symbol:"C$"},
    {id:5,name:"SGD",symbol:"S$"},
    {id:6,name:"EUR",symbol:"€"},
    {id:7,name:"GBP",symbol:"£"},
]
const CurrencyModal = (props : ICurrencyModal) => {
    const [currency,setCurrency] = useCurrencyContext();
    function ChangeCurrency(item : currencyType)
    {
        setCurrency(item);
        SaveCurrency(item);
        props.setCurrencyModal(false);
    }
    return (
        <Modal visible={props.showCurrencyModal} onRequestClose={() => props.setCurrencyModal(false)} 
        animationType='fade' transparent={true}>
            <View style = {settingStyles.currencyModal}>
                <Text style = {[mainStyles.text,settingStyles.currencyHeader]}>Choose Currency</Text>
                <FlatList data = {currencies} keyExtractor={(item) => item.name}
                renderItem={({item}) => (
                    <TouchableOpacity style = {settingStyles.cuurencyBtn} onPress={() => ChangeCurrency(item)}>
                    <Text style = {[mainStyles.text,settingStyles.currencyText]}>{item.symbol} - {item.name}</Text>
                </TouchableOpacity>                        
                )}/>
            </View>
        </Modal>
    )
}

export default CurrencyModal;