import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <View style={styles.container}>
            <Text>transactions</Text>
        </View>
    )
}
export default index;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F252F',
        flex: 1,
    }
})