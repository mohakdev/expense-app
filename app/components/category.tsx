import { StyleSheet,View, Text, Pressable } from 'react-native'
import React , {FC} from 'react'
import styles from '../styles'

interface CategoryProps {
    title: string;
}

const Category : FC<CategoryProps> = ({title}) => {
  return (
    <View style={categoryStyles.container}>
        <View style = {categoryStyles.box}>
            <Text style={[styles.text,categoryStyles.label]}>{title}</Text>
        </View>
      <Pressable style={categoryStyles.deleteBtn}>-</Pressable>
    </View>
  )
}

const categoryStyles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
    },
    box : {

    },
    label : {

    },
    deleteBtn : {

    },
})

export default Category