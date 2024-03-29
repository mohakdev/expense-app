import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import styles from '../styles';
import Category from '../components/category';

const settings = () => {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>Settings</Text>
            <Text style={[styles.text, settingStyles.categoryTxt]} >Categories</Text>
        </View>
    )
}

const settingStyles = StyleSheet.create({
    categoryTxt: {
        marginLeft: 10,
        alignSelf: 'flex-start',
        fontSize: 26,
        color: 'white'
    }
})

export default settings;