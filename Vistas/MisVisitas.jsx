import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import imagen1 from '../assets/imagen6.png'
const API = 'https://alexramval.pythonanywhere.com/mostrarPuntosTuristicos'

const listaImagenes = {
    imagen1: 'https://upload.wikimedia.org/wikipedia/commons/7/76/El_Palacio_Municipal_%28Atardecer%29.JPG',
    imagen2: 'https://media-cdn.tripadvisor.com/media/photo-s/15/fd/7f/f2/mercado-municipal-cd.jpg'
  }

const MisVisitas = () => {

    const [listaVisitas, setListaVisitas] = React.useState([])

    async function getLista(){
        const res = await fetch(API)
        const data = await res.json()
        setListaVisitas(data)
      }

    useEffect(()=>{
        getLista()
      })
    
      

  return (
    <View style={[{flex: 1, backgroundColor: '#1f1f1f'}, {flexDirection: 'row'}]}>
        
        <ScrollView>
            <View style={[styles.titulo, {flexDirection: 'row'}]}>

                <View style={{flexDirection: 'row'}}>
                    <Text>Mis visitas</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text>asdad</Text>
                </View>

            </View>
            <View style={[styles.listaPTuristicos]}>
                        
                {listaVisitas.map(Visita => (
                    <TouchableOpacity key={Visita.id} style={[styles.tarjetaPTuristico, {flexDirection: 'column'}]}>
                        <View style={[styles.contenedor, , {flexDirection: 'column'}]}>
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
        height: 150,
        borderRadius: 15
    },
    listaPTuristicos: {
        height: '100%',
        alignItems: 'center'
    },
    contenedor: {
        marginTop: '30%',
        marginLeft: '15%',
        marginRight: '15%',
        width: '70%',
        borderWidth: 1
    }
})

export default MisVisitas

