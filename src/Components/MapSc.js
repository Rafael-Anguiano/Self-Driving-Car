import React  from 'react'
import MapView, { Marker} from 'react-native-maps';
import {View, StyleSheet, Dimensions} from 'react-native'
import GetLocation from 'react-native-get-location'

const MapSc = ({navigation}) => {
    
    const [mkLat, setMkLat] = React.useState()
    const [mkLon, setMkLon] = React.useState()
    const [usrLat, setUsrLat] = React.useState()
    const [usrLon, setUsrLon] = React.useState()
    
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        console.log(location);
        setUsrLat(`${location.latitude}`)
        setUsrLon(`${location.longitude}`)
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })

    return (
        <View style={styles.container} >
            
            <MapView //Mapa y sus atributos
                provider="google"
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.006,
                    longitudeDelta: 0.006,
                }}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.006,
                    longitudeDelta: 0.006,
                }}
                followsUserLocation = {true}
                showsUserLocation = {true}
                showsCompass={true} //Brujula
                showsMyLocationButton = {true}
                showsPointsOfInterest={true} 
                showsBuildings={true} //Edificios
                showsTraffic={false} //Trafico
                zoomControlEnabled={true}
                onPoiClick={(e) => 
                    {
                        setMkLat(e.nativeEvent.coordinate.latitude) 
                        setMkLon(e.nativeEvent.coordinate.longitude)
                    }
                }
                style={styles.map}
            >
            {mkLon &&
                <Marker //Marcador del mapa
                coordinate={{latitude: mkLat, longitude: mkLon}} //Posición del marcador
                title="Start Point" //titulo del marcador
                //description="This is your location"   //Mensaje del marcador
                image={require('../Images/marker.png')} //Imagen del marcador
                draggable={true} //desplazable
                onDragEnd={(e) => {
                    setMkLat(e.nativeEvent.coordinate.latitude) 
                    setMkLon(e.nativeEvent.coordinate.longitude)
                }} 
            />}
            </MapView>
        </View>
    )
}

export default MapSc;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});