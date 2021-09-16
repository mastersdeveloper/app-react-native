
import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation();//mas eficiente seria usar los props

    useEffect(() => {
        //En este caso este cambio de opciones pesa mas y se muestra lo configurado
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atras'
        })
    }, [])// cuando el array esta vacio se ejecuta una vez al renderizar

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina2Screen</Text>

            <Button
                title="Ir página 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
