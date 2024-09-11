import { View, Text, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import CreateToast from './Modals/Toast';
import transactionStyles from '../styles/TransactionStyles';
import { transactionType } from '../types';

interface IDeleteTransactionProps {
    deleteToggle : boolean,
    setDeleteToggle : React.Dispatch<React.SetStateAction<boolean>>,
    transaction : transactionType,
    deleteTransaction : (transactionToDelete: transactionType) => void,
}

const DeleteTransaction = (props : IDeleteTransactionProps) => {
    const [widthAnim] = useState(new Animated.Value(0)); //Initial Width
    const deleteImage = require('../assets/delete.png');

    useEffect(() => {
        if(props.deleteToggle) { Animated.timing(widthAnim,{toValue: 60,duration: 500, useNativeDriver : false}).start(); }
        else { Animated.timing(widthAnim,{toValue: 0,duration: 500, useNativeDriver : false}).start(); }  
    }, [props.deleteToggle]);

    return (
        <Animated.View style={{width: widthAnim,alignSelf : 'center',justifyContent : 'center'}}>
            <TouchableOpacity onPress={() => 
            {
                props.setDeleteToggle(false);
                props.deleteTransaction(props.transaction);
            }}>
                <Image style={transactionStyles.deleteIcon} source={deleteImage}/>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default DeleteTransaction;