import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'

const Visita = ( {navigation, route} ) => {
    
    const [puntoTuristico, setpuntoTuristico] = React.useState({})

    useEffect(()=>{
        setpuntoTuristico(route.params)
    }, [route])

  return (
    <View style={[styles.contenedorPrincipal, {flexDirection: 'column'}]}>
        <View style={{alignItems: 'center'}}>

            <View style={[styles.contenedorTitulo,{flexDirection:'column'}]}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                    style={styles.regresar}
                    onPress={()=>navigation.navigate('MisVisitas')}>
                        <Text>X</Text>
                    </TouchableOpacity>
                    <Text style={[styles.titulo, styles.textTitulo]}>{puntoTuristico.puntoNombre}</Text>
                </View>
            </View>

            <View style={[styles.contenedorPuntoTuristico, {flexDirection: 'column'}]}>
                <View style={{flexDirection:'column'}}>
                    <View style={[{width: '100%', height: '60%'},{flexDirection: 'row'}]}>
                        <Image
                            source={{uri: puntoTuristico.url}}
                            style={[{width: '100%', height: '100%'}]}/>
                    </View>
                    <View style={[{width: '100%', height: '40%'},{flexDirection: 'row'}]}>
                            <View style={[styles.datosPuntosTuristicos,{flexDirection: 'column'}]}>
                                <Text>{puntoTuristico.puntoDir}</Text>
                                <Text>{puntoTuristico.puntoHorario}</Text>
                            </View>
                    </View>
                </View>
            </View>

            <View style={{borderWidth: 0.5, width: '90%', borderColor: '#6d5f5a'}} />

            <View style={[styles.contenedorInformacionPuntoTuristico, {flexDirection: 'column'}]}>
                <View style={[{justifyContent:'center', margin: '5%'},{flexDirection: 'row'}]}>
                    <Text style={styles.textTitulo}>Información</Text>
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <Text>{puntoTuristico.puntoInfromacion}</Text>
                </View>
                
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex:1,
        backgroundColor: '#15a116'
    },
    contenedorTitulo: {
        width: '90%',
        height: '7%',
        justifyContent:'center',
        margin: '3%'
    },
    contenedorPuntoTuristico: {
        width: '90%', 
        height: '40%',
        marginTop: '3%'
    },
    contenedorInformacionPuntoTuristico: {
        width: '90%', 
        height: '50%'
    },
    titulo: {
        width: '90%',
        paddingLeft: '5%'
    },
    regresar: {
        width: '10%', 
        alignItems:'center',
        justifyContent: 'center'
    },
    datosPuntosTuristicos: {
        margin: '7%',
    },
    textTitulo: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#5cd4a9'
    }
})

export default Visita

