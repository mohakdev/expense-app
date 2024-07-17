import { StyleSheet,View, Text, Pressable , GestureResponderEvent } from 'react-native';
import React , {FC} from 'react';
import styles from '../styles/mainStyles';
import { accentColor, primaryColor, secondaryColor } from '../colors';

interface categoryProps {
  name: string,
  onClick : (event: GestureResponderEvent) => void
}

const Category : FC<categoryProps> = ({name,onClick}) => {
  return (
    <View style={categoryStyles.container}>
        <View style = {categoryStyles.box}>
            <Text style={[styles.text,categoryStyles.label]}> {name} </Text>
        </View>
      <Pressable style={categoryStyles.deleteBtn} onPress={onClick}>
        <Text style={[styles.text,categoryStyles.deleteBtnLabel]}>-</Text>
      </Pressable>
    </View>
  )
}

const categoryStyles = StyleSheet.create({
    container : {
      flexDirection : 'row',
      alignSelf : 'center',
      alignItems : 'flex-start',
      marginTop : 10,
      marginBottom : 10,
    },
    box : {
      borderRadius : 8,
      borderWidth : 3,
      backgroundColor : secondaryColor,
      borderColor : 'white',
      width : '70%'
    },
    label : {
      fontSize : 27,
      color : 'white'
    },
    deleteBtnLabel : {
      fontSize : 28,
      color : primaryColor
    },
    deleteBtn : {
      borderRadius : 4,
      backgroundColor: accentColor,
      paddingLeft : 10,
      paddingRight : 10,
      paddingTop : 5,
      marginLeft : 20
    },
})

export default Category