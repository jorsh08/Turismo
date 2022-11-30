import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'

const API = 'https://alexramval.pythonanywhere.com/mostrarPuntosTuristicos'

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
    <View style={{flex: 1}}>
        

        <ScrollView>
            <View style={styles.titulo}>
                <Text>Mis visitas</Text>
            </View>
            {listaVisitas.map(Visita => (
                <View key={Visita.id} style={{marginTop: '5%'}}>
                    <Text style={{fontWeight: 'bold'}}>Punto turistico</Text>
                    <Text style={{fontStyle: 'italic'}}>{Visita.puntoNombre}</Text>
                    <Text style={{fontStyle: 'italic'}}>{Visita.puntoDir}</Text>
                </View>
            ))}
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
        borderRadius: 100
    }
})

export default MisVisitas

