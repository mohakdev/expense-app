import { View, Text , GestureResponderEvent, Pressable, StyleSheet } from 'react-native'
import React , {FC} from 'react'
import mainStyles from '../styles'
import { accentColor, primaryColor } from '../colors'

interface buttonProps {
    label : string,
    onClick : (event: GestureResponderEvent) => void
}

const Button : FC<buttonProps> = ({label,onClick}) => {
  return (
    <Pressable style={buttonStyle.buttonStyle} onPress={onClick}>
        <Text style={[mainStyles.text,buttonStyle.labelStyle]}>{label}</Text>
    </Pressable>
  )
}

export default Button;

const buttonStyle = StyleSheet.create({
    labelStyle: {
      fontSize : 30,
      color: primaryColor
    },
    buttonStyle:{
      backgroundColor: accentColor,
      borderRadius: 12,
      padding : 6,
      marginTop : 10
    }
});