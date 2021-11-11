
import React, { useRef } from 'react'
import { StyleSheet, View, Animated, PanResponder } from 'react-native'

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponser = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y
            }
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            //Cuando se suelta la animacion 
            Animated.spring(
                pan,
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }
            ).start();
        }
    });

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponser.panHandlers}
                style={[pan.getLayout(), styles.purpleBox]}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#75CEDB',
        width: 150,
        height: 150
    }
})
