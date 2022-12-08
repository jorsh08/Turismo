import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'

const API = 'https://alexramval.pythonanywhere.com/mostrarPuntosTuristicos'

const MisVisitas = ( {navigation} ) => {

    const [listaVisitas, setListaVisitas] = React.useState([])

    async function getLista(){
        const res = await fetch(API)
        const data = await res.json()
        setListaVisitas(data)
      }

    async function informacionVisita(Visita){
        navigation.navigate('Visita', Visita)
    }

    useEffect(()=>{
        getLista()
      })
    
  return (
    <View style={[{flex: 1, backgroundColor: '#1f1f1f'}, {flexDirection: 'row'}]}>
        
        <ScrollView>
            <View style={[styles.titulo, {flexDirection: 'row'}]}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color:'#f1f1f1'}}>Mis visitas</Text>
                </View>
            </View>
            <View style={[styles.listaPTuristicos]}>
                        
                {listaVisitas.map(Visita => (
                    <TouchableOpacity
                        key={Visita.id} 
                        style={[styles.tarjetaPTuristico, {flexDirection: 'column'}]}
                        onPress={()=>informacionVisita(Visita)}>
                        <Image
                        source={{uri: Visita.url}}
                        style={{width: '100%', height: '70%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}/>
                        <View style={[styles.contenedor, {flexDirection: 'column'}]}>
                            <Text style={[{fontStyle: 'italic', fontWeight: 'bold'}, {flexDirection: 'column'}]}>{Visita.puntoNombre}</Text>
                            <Text style={[{fontStyle: 'italic', fontSize: 12}, {flexDirection: 'column'}]}>{Visita.puntoDir}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
        
    </View>
  )
}
const styles = StyleSheet.create({
    titulo:{
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '5%',
        alignItems: 'center',
    },
    tarjetaPTuristico:{
        marginTop: '5%',
        backgroundColor: '#3a9a3c',
        width: '80%',
        height: 200,
        borderRadius: 15
    },
    listaPTuristicos: {
        height: '100%',
        alignItems: 'center'
    },
    contenedor: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 5,
        width: '70%',
    }
})

export default MisVisitas

