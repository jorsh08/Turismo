import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const API = 'http://192.168.0.103:8000/Linea10/'

const App = () => {

  const [lista, setLista] = React.useState([])

  useEffect(()=>{
    getLista();
  },[]);

  async function getLista(){
    let lista = []
    const res = await fetch(API)
    const data = await res.json()
    data.forEach( element => {
      lista.push({latitude: parseFloat(element.latitude), longitude: parseFloat(element.longitude), id: element.id})
    });
    setLista(lista)
  }


  const getCoordenadas = (c) => {
    console.log(c)
  }

  return (
    <View style={{flex:1}}>
      <MapView
      provider={PROVIDER_GOOGLE}
       style={styles.map}
       onPress={(e) => getCoordenadas(e.nativeEvent.coordinate)}
       region={{
         latitude: 27.493875029632616,
         longitude: -109.9453880265355,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       showsUserLocation
        loadingEnabled
        mapType='terrain'
        showsMyLocationButton={false}
     >
      {lista.map(element => (
        <Marker
          coordinate={{
            latitude: element.latitude,
            longitude: element.longitude}}
            key = {element.id}
        />
      ))}
     </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map:{
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  boton: {
    marginTop: '150%',
    width: 100,
    height: 60,
    backgroundColor: '#1a2b3c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botonTexto:{
    color: '#ffffff'
  }
})

export default App