import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, { useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const API = 'https://alexramval.pythonanywhere.com/mostrarPuntosTuristicos'

const Mapa = ({navigation}) => {

  const [lista, setLista] = React.useState([])

  const [contenedorInformacion, setContenedorLista] = React.useState(false)

  const [puntoTuristico, setPuntoTuristico] = React.useState({})

  

  useEffect(()=>{
    getLista();
  },[]);

  async function getLista(){
    let lista = []
    const res = await fetch(API)
    const data = await res.json()
    data.forEach( element => {
        lista.push({latitude: parseFloat(element.latitude), longitude: parseFloat(element.longitude), id: element.id, nombre: element.puntoNombre, informacion: element.puntoInfromacion})
    });
    setLista(lista)
  }

  async function mostrarInformacion(infoPuntoTuristico){
    setContenedorLista(true)
    setPuntoTuristico(infoPuntoTuristico)
  }

  const getCoordenadas = (c) => {
    setContenedorLista(false)
    console.log(c)
  }

  return (
    <View style={{flex:1, alignItems: 'center'}}>

      

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
            onPress = {() => mostrarInformacion(element)}
        >
          
          <Image
            source={require('../assets/1.png')}
            style={{width: 50, height: 50}}
            resizeMode="contain"/>
        </Marker>
      ))}

      

     </MapView>
     <TouchableOpacity
      style={styles.misVisitas}
      onPress= {() => navigation.navigate('MisVisitas')}>
      <Text>Mis visitas</Text>
     </TouchableOpacity>
      <View style={[contenedorInformacion ? styles.contenedorInformacion : styles.contenedorInformacionOculto, {flexDirection: 'row'}]}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text >Nombre</Text>
              <Text >{puntoTuristico.nombre}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text >Informacion</Text>
              <Text >{puntoTuristico.informacion}</Text>
            </View>
          </View>
        </View>

      </View>
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
  },
  contenedorInformacion: {
    position: 'absolute',
    width: '90%',
    height: '20%',
    backgroundColor: '#ff00ca',
    marginTop: '135%',
    borderRadius: 25
  },
  contenedorInformacionOculto: {
    width: 0,
    height: 0
  },
  misVisitas: {
    marginTop: '150%',
    backgroundColor: '#3ac562',
    width: 150,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  }
})

export default Mapa