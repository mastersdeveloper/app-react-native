
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> {
//     id: number;
//     nombre: string;
// };
interface Props extends DrawerScreenProps<any, any> {
    id: number;
    nombre: string;
};

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina1Screen</Text>
            <Button
                title="Ir a Pagina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 5 }}>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{
                    ...styles.botonGrande,
                    backgroundColor: '#5856D6'
                }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                    activeOpacity={0.75}>
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    ...styles.botonGrande,
                    backgroundColor: '#FF9427'
                }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                    activeOpacity={0.75}>
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
