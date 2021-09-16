
import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {
    id: number;
    nombre: string;
};

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina1Screen</Text>
            <Button
                title="Ir a Pagina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text>Navegar con argumentos</Text>

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
