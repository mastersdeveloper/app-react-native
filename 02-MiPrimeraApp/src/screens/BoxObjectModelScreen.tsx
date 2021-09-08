import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 20,
        //width: 150,
        borderWidth: 10
        // backgroundColor: 'red'
    },
    container: {
        backgroundColor: 'red',
        flex: 1
    }
})