
import React from 'react';
import ContadorScreen from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    //  <ContadorScreen/>

    //SafeAreaView: verifica si se puede mostrar la informacion
    <SafeAreaView style={{ flex: 1 }}>
      {/* <BoxObjectModelScreen /> */}

      {/* <DimensionesScreen/> */}

      {/* <PositionScreen /> */}

      {/* <FlexScreen /> */}

      <TareaScreen />

    </SafeAreaView>

  )
}

export default App;