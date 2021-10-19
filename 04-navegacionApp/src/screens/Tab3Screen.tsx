import React from 'react';
import { Text, View } from 'react-native';
import { useEffect } from 'react';

export const Tab3Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, [])

    return (
        <View>
            <Text>Tab3Screen</Text>
        </View>
    )
}
