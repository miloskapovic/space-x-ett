import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '350px',
    height: '350px'
};

interface Coordinates {
    lat: number,
    lng: number
}

const Map: React.FC<Coordinates> = (props) => {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);


    useEffect(() => {
        setLat(props.lat);
        setLng(props.lng);
    }, [props])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDlouxrxkTQrR_jwyk48cvOgjP2pmJgRTw"
    })
    


    const onLoad = React.useCallback(function callback(map) {
        setLat(props.lat);
        setLng(props.lng);
    }, [])

    console.log(props)
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: lat, lng: lng }}
            zoom={10}
            onLoad={onLoad}
        >
            <Marker position={{ lat: lat, lng: lng }} />
        </GoogleMap>
    ) : <></>
}

export default Map;
