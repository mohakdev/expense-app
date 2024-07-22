import { View, Text, Modal } from 'react-native'
import React from 'react'
import mainStyles from '../../styles/MainStyles';

interface ITransactionModal {
    showModal : boolean,
    setShowModal : React.Dispatch<React.SetStateAction<boolean>>,
}

const TransactionModal = (props : ITransactionModal) => {
  return (
    <Modal visible={props.showModal} onRequestClose={() => props.setShowModal(false)}
    animationType='slide' transparent={true}>
        <View style={mainStyles.modal}>
            
        </View>
    </Modal>
  )
}

export default TransactionModal;