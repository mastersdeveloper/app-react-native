import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

//Forma inadecuada
//interface Props extends StackScreenProps<any, any> { };

//Forma mas adecuada
// interface RouterParams {
//     id: number;
//     nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };

export const PersonaScreen = ({ navigation, route }: Props) => {

    //Forma mas adecuada
    //const params = route.params as RouterParams;

    const params = route.params;

    const { changeUserName } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUserName(params.nombre)
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
