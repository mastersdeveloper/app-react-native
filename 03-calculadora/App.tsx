import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screen/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>

      {/* 
      Usando el component StatusBar podemos hacer que todo tenga el color principal y con la propiedad barStyle en IOS
      se muestra la informacion del header. 
      */}

      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />

      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;