import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapa from './Vistas/Mapa';
import MisVisitas from './Vistas/MisVisitas';
import Visita from './Vistas/Visita';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Mapa" component={Mapa} options={{ headerShown: false }}/>
        <Stack.Screen name="MisVisitas" component={MisVisitas} options={{ headerShown: false }}/>
        <Stack.Screen name="Visita" component={Visita} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App