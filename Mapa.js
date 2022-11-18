import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Mapa = () => {
  return (
    <View>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map:{
    ...StyleSheet.absoluteFill,
        width: '100%',
        height: '100%',
  }
})

export default Mapa