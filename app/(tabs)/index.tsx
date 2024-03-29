import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Styles from '../styles'
import { useFonts } from 'expo-font';

const index = () => {
    useFonts({
        'Jua-Regular': require('../assets/Jua-Regular.ttf'),
    });
    return (
        <View style={Styles.background}>
            <Text>transactions</Text>
        </View>
    )
}
export default index;